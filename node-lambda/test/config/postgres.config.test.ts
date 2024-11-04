import { Client } from 'pg';
import PostgresConfig, { IDatabaseConfig } from '../../../src/{{kebabCase moduleName}}/config/postgres.config';
import { ISecretsManagerConfig } from '../../../src/{{kebabCase moduleName}}/config/secret-manager.config';

jest.mock('pg', () => {
    const mClient = {
        connect: jest.fn(),
        query: jest.fn(),
        end: jest.fn(),
    };
    return { Client: jest.fn((props) => ({ ...mClient, ...props })) };
});

describe('PostgresConfig', () => {
    let postgresConfig: PostgresConfig;
    let secretsManagerConfig: jest.Mocked<ISecretsManagerConfig>;
    const mockDatabaseConfig: IDatabaseConfig = {
        username: 'testuser',
        password: 'testpass',
        engine: 'postgres',
        host: 'localhost',
        port: 5432,
        dbname: 'testdb',
        dbClusterIdentifier: 'test-cluster',
    };

    beforeEach(() => {
        secretsManagerConfig = {
            getSecretValue: jest.fn(),
        };
        secretsManagerConfig.getSecretValue.mockResolvedValue(mockDatabaseConfig);
        postgresConfig = new PostgresConfig(secretsManagerConfig);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should fetch database config from secrets manager', async () => {
        process.env.SCM_BD_PRODSUSC = 'test-secret';
        const config = await postgresConfig.fetchDatabaseConfig();
        expect(secretsManagerConfig.getSecretValue).toHaveBeenCalledWith('test-secret');
        expect(config).toEqual(mockDatabaseConfig);
    });

    it('should throw an error if secret name is not found', async () => {
        delete process.env.SCM_BD_PRODSUSC;
        await expect(postgresConfig.fetchDatabaseConfig()).rejects.toThrow('Secret name not found');
    });

    it('should return the current config if already fetched', async () => {
        postgresConfig.currentConfig = mockDatabaseConfig;
        const config = await postgresConfig.getDatabaseConfig();
        expect(config).toEqual(mockDatabaseConfig);
        expect(secretsManagerConfig.getSecretValue).not.toHaveBeenCalled();
    });

    it('should create a new client with the correct config', async () => {
        process.env.SCM_BD_PRODSUSC = 'test-secret';
        secretsManagerConfig.getSecretValue.mockResolvedValue(mockDatabaseConfig);

        const client = await postgresConfig.createClient();
        expect(Client).toHaveBeenCalledWith({
            user: mockDatabaseConfig.username,
            password: mockDatabaseConfig.password,
            host: mockDatabaseConfig.host,
            port: mockDatabaseConfig.port,
            database: mockDatabaseConfig.dbname,
            application_name: PostgresConfig.APPLICATION_NAME,
        });
        expect(client.user).toBe(mockDatabaseConfig.username);
        expect(client.password).toBe(mockDatabaseConfig.password);
        expect(client.host).toBe(mockDatabaseConfig.host);
        expect(client.port).toBe(mockDatabaseConfig.port);
        expect(client.database).toBe(mockDatabaseConfig.dbname);
    });

    it('should execute a query with values', async () => {
        const mockQueryResult = { rows: [{ id: 1, name: 'test' }] };
        const clientQuery = jest.fn().mockResolvedValue(mockQueryResult);
        const clientEnd = jest.fn();
        const clientConnect = jest.fn();
        const createClient
            = jest.spyOn(postgresConfig, 'createClient').mockResolvedValue({
                query: clientQuery,
                end: clientEnd,
                connect: clientConnect,
            } as any
        );
        const query = 'SELECT * FROM users WHERE id = $1';
        const values = [1];
        const result = await postgresConfig.query(query, values);

        expect(createClient).toHaveBeenCalled();
        expect(clientConnect).toHaveBeenCalled();
        expect(clientQuery).toHaveBeenCalledWith(query, values);
        expect(clientEnd).toHaveBeenCalled();
        expect(result).toEqual(mockQueryResult);
    });

    it('should execute a query without values', async () => {
        const mockQueryResult = { rows: [{ id: 1, name: 'test' }] };
        const clientQuery = jest.fn(() => mockQueryResult);
        const clientEnd = jest.fn();
        const clientConnect = jest.fn();
        const createClient
            = jest.spyOn(postgresConfig, 'createClient').mockResolvedValue({
                query: clientQuery,
                end: clientEnd,
                connect: clientConnect,
            } as any
        );


        const query = 'SELECT * FROM users';
        const result = await postgresConfig.query(query);

        expect(createClient).toHaveBeenCalled();
        expect(clientConnect).toHaveBeenCalled();
        expect(clientQuery).toHaveBeenCalledWith(query, undefined);
        expect(result).toEqual(mockQueryResult);
    });

    it('should call client.end() even if an error is thrown', async () => {
        const clientQuery = jest.fn().mockRejectedValue(new Error('Query error'));
        const clientEnd = jest.fn();
        const clientConnect = jest.fn();
        const createClient
            = jest.spyOn(postgresConfig, 'createClient').mockResolvedValue({
                query: clientQuery,
                end: clientEnd,
                connect: clientConnect,
            } as any
        );

        const query = 'SELECT * FROM users';
        await expect(postgresConfig.query(query)).rejects.toThrow('Query error');

        expect(createClient).toHaveBeenCalled();
        expect(clientConnect).toHaveBeenCalled();
        expect(clientEnd).toHaveBeenCalled();
    });

});