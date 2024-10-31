import { APIGatewayProxyResult } from 'aws-lambda';
import { StatusCodes } from './status-code';

export const enum ValidationMessage {
    SUCCESS = 'Correcto',
    BAD = 'Incorrecto',
}

export class ApiGatewayResponse<DataT = unknown> implements APIGatewayProxyResult {
    statusCode: StatusCodes;
    body: string;
    constructor(
        message: string,
        status: StatusCodes,
        data?: DataT,
    ) {
        this.body = JSON.stringify({
            mensaje: message,
            data,
            estado: status === StatusCodes.OK ? ValidationMessage.SUCCESS : ValidationMessage.BAD,
        });
        this.statusCode = status;
    }
}
