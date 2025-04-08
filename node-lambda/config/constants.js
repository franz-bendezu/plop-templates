/**
 * Regular expression pattern used to identify where to insert methods in generated code
 */
export const BLOCK_METHOD_PATTERN =
  /(?<imports>\/\/\s*Imports)(?<code>[\s\S]*?)(?<methods>\/\/\s*Methods)/gi;

/**
 * Regular expression pattern used to identify where to insert return blocks in generated response files
 */
export const BLOCK_RESPONSE_PATTERN =
  /(?<imports>\/\/\s*Imports)(?<code>[\s\S]*?)(?<return>\/\/\s*Return)/gi;

/**
 * Regular expression pattern used to identify where to insert test blocks in generated test files
 */
export const BLOCK_TEST_PATTERN =
  /(?<imports>\/\/\s*Imports)(?<code>[\s\S]*?)(?<tests>\/\/\s*Tests)/gi;

/**
 * Base path for the folder, used for template generation targets
 */
export const FOLDER_PATH = "{{kebabCase folder}}";

/**
 * Base path for source files, used for template generation targets
 */
export const SRC_PATH = "{{kebabCase folder}}/src/{{kebabCase moduleName}}";

/**
 * Base path for test files, used for template generation targets
 */
export const TEST_PATH = "{{kebabCase folder}}/test/{{kebabCase moduleName}}";

/**
 * Path to template files used for code generation
 */
export const TEMPLATE_PATH = "plop-templates/node-lambda";

// Operations

/**
 * Operation type representing the creation of a single resource
 */
export const CREATE_ONE_OPERATION = "create-one";

/**
 * Operation type representing the creation of multiple resources at once
 */
export const CREATE_MANY_OPERATION = "create-many";

/**
 * Operation type representing the retrieval of a single resource by ID
 */
export const READ_ONE_OPERATION = "read-one";

/**
 * Operation type representing the retrieval of multiple resources with filtering capabilities
 */
export const READ_MANY_OPERATION = "read-many";

/**
 * Operation type representing the update of an existing resource
 */
export const UPDATE_OPERATION = "update";

/**
 * Operation type representing the deletion of a resource
 */
export const DELETE_OPERATION = "delete";
