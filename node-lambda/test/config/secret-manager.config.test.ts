import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import { mockClient } from 'aws-sdk-client-mock';
import { RuntimeError } from '../../../src/{{kebabCase moduleName}}/common/error/runtime-error';
import SecretsManagerConfig from '../../../src/{{kebabCase moduleName}}/config/secret-manager.config';

const secretsManagerMock = mockClient(SecretsManagerClient);

describe('SecretsManagerConfig', () => {
    let secretsManagerConfig: SecretsManagerConfig;

    beforeEach(() => {
        secretsManagerConfig = new SecretsManagerConfig(new SecretsManagerClient({}));
        secretsManagerMock.reset();
    });

    it('should return the secret value when secret is found', async () => {
        const secretId = 'test-secret-id';
        const secretValue = { key: 'value' };
        secretsManagerMock.on(GetSecretValueCommand, { SecretId: secretId }).resolves({
            SecretString: JSON.stringify(secretValue)
        });

        const result = await secretsManagerConfig.getSecretValue<typeof secretValue>(secretId);
        expect(result).toEqual(secretValue);
    });

    it('should throw an error when secret is not found', async () => {
        const secretId = 'test-secret-id';
        secretsManagerMock.on(GetSecretValueCommand, { SecretId: secretId }).resolves({
            SecretString: undefined
        });

        await expect(secretsManagerConfig.getSecretValue(secretId)).rejects.toThrow('Secrets not found');
    });

    it('should throw a RuntimeError when an error occurs', async () => {
        const secretId = 'test-secret-id';
        const errorMessage = 'AWS error';
        secretsManagerMock.on(GetSecretValueCommand, { SecretId: secretId }).rejects(new Error(errorMessage));

        await expect(secretsManagerConfig.getSecretValue(secretId)).rejects.toThrow(RuntimeError);
        await expect(secretsManagerConfig.getSecretValue(secretId)).rejects.toThrow('Error fetching secret');
    });
});