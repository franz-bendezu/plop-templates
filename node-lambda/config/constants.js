export const BLOCK_METHOD_PATTERN =
  /(?<imports>\/\/\s*Imports)(?<code>[\s\S]*?)(?<methods>\/\/\s*Methods)/gi;
export const BLOCK_RESPONSE_PATTERN = /(?<return>\/\/\s*Return)/g;
export const FOLDER_PATH = "{{kebabCase folder}}";
export const SRC_PATH = "{{kebabCase folder}}/src/{{kebabCase moduleName}}";
export const TEST_PATH = "{{kebabCase folder}}/test/{{kebabCase moduleName}}";
export const TEMPLATE_PATH = "plop-templates/node-lambda";
