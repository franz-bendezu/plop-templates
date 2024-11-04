import { ApiGatewayResponse } from '../response/api-gateway';
import { StatusCodes } from '../response/status-code';

export interface IRuntimeInput<DataT = unknown> {
    statusCode?: StatusCodes;
    statusMessage?: string;
    data?: DataT;
    cause?: unknown;
    message?: string;
}
export class RuntimeError<DataT = unknown> extends Error {
    public static readonly __runtime_error__ = true;
    statusCode: StatusCodes = 500;
    statusMessage = '';
    data?: DataT;
    cause?: unknown;

    constructor(input: string | IRuntimeInput<DataT>) {
        const message = RuntimeError.extractMessage(input);
        const opts = RuntimeError.extractOptions(input);
        // @ts-ignore https://v8.dev/features/error-cause
        super(message, opts);

        // Polyfill cause for other runtimes
        if (opts.cause && !this.cause) {
            this.cause = opts.cause;
        }
        if (typeof input !== 'string') {
            const cause = opts.cause;
            const statusCode = RuntimeError.extractStatusCode({
                statusCode: input.statusCode,
                cause,
            });

            if (statusCode !== undefined) {
                this.statusCode = statusCode;
            }

            const statusMessage = RuntimeError.extractStatusMessage({
                cause,
                statusMessage: input.statusMessage,
                message: input.message,
            });
            if (statusMessage) {
                this.statusMessage = statusMessage;
            }
            if (input.data) {
                this.data = input.data;
            }
        } else {
            this.statusMessage = message;
        }
    }

    static extractStatusCode<DataT>(input: Partial<IRuntimeInput<DataT>>): StatusCodes | undefined {
        return input.statusCode ?? (input.cause as RuntimeError)?.statusCode;
    }

    static extractStatusMessage<DataT>(input: Partial<RuntimeError<DataT>>): string | undefined {
        return (
            input.statusMessage ??
            (input?.cause as Partial<RuntimeError>)?.statusMessage ??
            input.message
        );
    }

    static extractMessage<DataT>(input: string | IRuntimeInput<DataT>): string {
        return typeof input === 'string'
            ? input
            : input.statusMessage ?? input.message ?? '';
    }

    static extractOptions<DataT>(input: string | IRuntimeInput<DataT>): {
        cause?: unknown;
    } {
        return typeof input === 'string'
            ? {}
            : {
                cause: input.cause || input,
            };
    }

    toAPIGatewayResponse() {
        return new ApiGatewayResponse(
            this.statusMessage,
            this.statusCode,
            this.data
        );
    }
}

export function isRuntimeError<DataT = unknown>(
    input: any
): input is RuntimeError<DataT> {
    return input?.constructor?.__runtime_error__ === true;
}
