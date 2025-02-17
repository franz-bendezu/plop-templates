export const BLOCK_METHOD_PATTERN =
  /(?<imports>\/\/\s*Imports)(?<code>[\s\S]*?)(?<methods>\/\/\s*Methods)/gi;
export const BLOCK_RESPONSE_PATTERN =
  /(?<imports>\/\/\s*Imports)(?<code>[\s\S]*?)(?<return>\/\/\s*Return)/gi;
export const BLOCK_TEST_PATTERN =
  /(?<imports>\/\/\s*Imports)(?<code>[\s\S]*?)(?<tests>\/\/\s*Tests)/gi;
export const FOLDER_PATH = "{{kebabCase folder}}";
export const SRC_PATH = "{{kebabCase folder}}/src/{{kebabCase moduleName}}";
export const TEST_PATH = "{{kebabCase folder}}/test/{{kebabCase moduleName}}";
export const TEMPLATE_PATH = "plop-templates/node-lambda";

export const CREATE_ONE_OPERATION = "create-one";
export const CREATE_MANY_OPERATION = "create-many";
export const READ_ONE_OPERATION = "read-one";
export const READ_MANY_OPERATION = "read-many";
export const UPDATE_OPERATION = "update";
export const DELETE_OPERATION = "delete";
