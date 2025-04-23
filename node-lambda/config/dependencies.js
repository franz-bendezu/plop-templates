/**
 * Development dependencies configuration
 */
export const devDependencies = {
  "serverless": "^3.x",
  "serverless-offline": "^13.x",
  "@aws-sdk/client-secrets-manager": undefined,
  "@types/aws-lambda": undefined,
  "aws-sdk-client-mock": undefined,
  "jest": "^29.7.0"
};

/**
 * Production dependencies configuration
 */
export const dependencies = {
  "@joi/date": undefined,
  "joi": undefined,
  "pino": undefined,
};

/**
 * Dependencies to uninstall before upgrading
 */
export const dependenciesToRemove = [
  "serverless-offline",
  "serverless"
];

/**
 * Database driver specific dependencies
 */
export const dbDriverDependencies = {
  "postgres": {
    "pg": undefined,
    "@types/pg": undefined,
  },
  "oracle": {
    "oracledb": undefined,
    "@types/oracledb": undefined,
  },
};
