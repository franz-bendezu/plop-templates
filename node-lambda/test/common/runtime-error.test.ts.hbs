import { RuntimeError, isRuntimeError } from '../../../src/{{kebabCase moduleName}}/common/error/runtime-error';
import { ApiGatewayResponse } from '../../../src/{{kebabCase moduleName}}/common/response/api-gateway';
import { StatusCodes } from '../../../src/{{kebabCase moduleName}}/common/response/status-code';

describe('RuntimeError', () => {
  it('should set message and default properties when input is a string', () => {
    const DEFAULT_ERROR_MESSAGE = 'Default error message';
    const error = new RuntimeError(DEFAULT_ERROR_MESSAGE);
    expect(error).toBeInstanceOf(RuntimeError);
    expect(error.message).toBe(DEFAULT_ERROR_MESSAGE);
    expect(error.statusCode).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(error.statusMessage).toBe(DEFAULT_ERROR_MESSAGE);
    expect(error.data).toBeUndefined();
    expect(error.cause).toBeUndefined();
  });

  it('should set properties from a partial RuntimeError object', () => {
    const error = new RuntimeError({
      statusCode: StatusCodes.BAD_REQUEST,
      statusMessage: 'Not Found',
      data: { detail: 'Resource not found' },
    });
    expect(error).toBeInstanceOf(RuntimeError);
    expect(error.message).toBe('Not Found');
    expect(error.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(error.statusMessage).toBe('Not Found');
    expect(error.data).toEqual({ detail: 'Resource not found' });
  });

  it('should set cause when provided in the input object', () => {
    const cause = new Error('Underlying cause');
    const error = new RuntimeError({
      statusMessage: 'Test error with cause',
      cause,
    });
    expect(error).toBeInstanceOf(RuntimeError);
    expect(error.message).toBe('Test error with cause');
    expect(error.cause).toBe(cause);
  });

  it('should set statusCode from cause if not provided in input', () => {
    const cause = new RuntimeError({
      statusCode: StatusCodes.BAD_REQUEST,
      statusMessage: 'Forbidden',
    });
    const error = new RuntimeError({
      statusMessage: 'Test error with inherited status code',
      cause,
    });
    expect(error.message).toBe('Test error with inherited status code');
    expect(error.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(error.statusMessage).toBe('Test error with inherited status code');
    expect(error.cause).toBe(cause);
  });

  it('should set statusMessage from cause if not provided in input', () => {
    const cause = new RuntimeError({
      statusCode: StatusCodes.FORBIDDEN,
      statusMessage: 'Forbidden',
    });
    const error = new RuntimeError({
      statusCode: StatusCodes.UNAUTHORIZED,
      cause,
    });
    expect(error.message).toBe('');
    expect(error.statusCode).toBe(StatusCodes.UNAUTHORIZED);
    expect(error.statusMessage).toBe('Forbidden');
    expect(error.cause).toBe(cause);
  });

  it('should set data from input object', () => {
    const error = new RuntimeError({
      statusCode: StatusCodes.BAD_REQUEST,
      statusMessage: 'Bad Request',
      data: { field: 'modifiedBy' },
    });
    expect(error.message).toBe('Bad Request');
    expect(error.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(error.statusMessage).toBe('Bad Request');
    expect(error.data).toEqual({ field: 'modifiedBy' });
  });

  it('should convert to DTO correctly', () => {
    const error = new RuntimeError({
      statusCode: StatusCodes.BAD_REQUEST,
      statusMessage: 'Bad Request',
      data: { field: 'modifiedBy' },
    });
    const dto = error.toAPIGatewayResponse();
    expect(dto).toBeInstanceOf(ApiGatewayResponse);
    expect(dto.statusCode).toBe(StatusCodes.BAD_REQUEST);
  });

  it('should extract message correctly', () => {
    const message = RuntimeError.extractMessage('Test message');
    expect(message).toBe('Test message');
  });

  it('should extract status code correctly', () => {
    const statusCode = RuntimeError.extractStatusCode({
      statusCode: StatusCodes.BAD_REQUEST,
    });
    expect(statusCode).toBe(StatusCodes.BAD_REQUEST);
  });

  it('should extract status message correctly', () => {
    const statusMessage = RuntimeError.extractStatusMessage({
      statusMessage: 'Test status message',
    });
    expect(statusMessage).toBe('Test status message');
  });

  it('should extract status message from cause if not provided', () => {
    const cause = new RuntimeError({
      statusMessage: 'Test cause message',
    });
    const statusMessage = RuntimeError.extractStatusMessage({
      cause,
    });
    expect(statusMessage).toBe('Test cause message');
  });

  it('should extract status message from message if not provided', () => {
    const statusMessage = RuntimeError.extractStatusMessage({
      message: 'Test message',
    });
    expect(statusMessage).toBe('Test message');
  });

  it('should extract options correctly', () => {
    const options = RuntimeError.extractOptions({
      cause: new Error('Test cause'),
    });
    expect(options.cause).toBeInstanceOf(Error);
  });
});

describe('isRuntimeError', () => {
  it('should return true for RuntimeError instances', () => {
    const error = new RuntimeError('Test error');
    expect(isRuntimeError(error)).toBe(true);
  });

  it('should return false for non-RuntimeError instances', () => {
    const error = new Error('Test error');
    expect(isRuntimeError(error)).toBe(false);
  });

  it('should return false for plain objects', () => {
    const obj = { message: 'Test error' };
    expect(isRuntimeError(obj)).toBe(false);
  });
});

