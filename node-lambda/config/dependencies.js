/**
 * Development dependencies configuration
 */
export const devDependencies = {
  "serverless": "^3.39.0",
  "serverless-offline": "^13.8.2",
  "@aws-sdk/client-secrets-manager": "^3.668.0",
  "@types/aws-lambda": "^8.10.145",
  "aws-sdk-client-mock": "^4.0.2",
  "jest": "^29.7.0",
  "@types/pino": "^7.0.5"
};

/**
 * Production dependencies configuration
 */
export const dependencies = {
  "@joi/date": "^2.1.1",
  "joi": "^17.13.3",
  "pino": "^8.16.2"
};

/**
 * Dependencies to uninstall before upgrading
 */
export const dependenciesToRemove = [
  "serverless-offline",
  "serverless"
];
