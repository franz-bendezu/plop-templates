import { ApiGatewayResponse, ValidationMessage } from '../../../src/{{kebabCase moduleName}}/common/response/api-gateway';
import { StatusCodes } from '../../../src/{{kebabCase moduleName}}/common/response/status-code';

describe('ApiGatewayResponse', () => {
    it('should create a response with status OK and success message', () => {
        const message = 'Operation successful';
        const status = StatusCodes.OK;
        const data = { key: 'value' };

        const response = new ApiGatewayResponse(message, status, data);

        expect(response.statusCode).toBe(StatusCodes.OK);
        expect(response.body).toBe(JSON.stringify({
            mensaje: message,
            data,
            estado: ValidationMessage.SUCCESS,
        }));
    });

    it('should create a response with status BAD_REQUEST and bad message', () => {
        const message = 'Operation failed';
        const status = StatusCodes.BAD_REQUEST;
        const data = { error: 'Invalid input' };

        const response = new ApiGatewayResponse(message, status, data);

        expect(response.statusCode).toBe(StatusCodes.BAD_REQUEST);
        expect(response.body).toBe(JSON.stringify({
            mensaje: message,
            data,
            estado: ValidationMessage.BAD,
        }));
    });

    it('should create a response without data', () => {
        const message = 'No data provided';
        const status = StatusCodes.OK;

        const response = new ApiGatewayResponse(message, status);

        expect(response.statusCode).toBe(StatusCodes.OK);
        expect(response.body).toBe(JSON.stringify({
            mensaje: message,
            estado: ValidationMessage.SUCCESS,
        }));
    });
});