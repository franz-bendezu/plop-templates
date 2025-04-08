import {
  CREATE_ONE_OPERATION,
  READ_MANY_OPERATION,
  UPDATE_OPERATION,
  DELETE_OPERATION,
  CREATE_MANY_OPERATION,
  READ_ONE_OPERATION,
  TEST_PATH,
  TEMPLATE_PATH,
  BLOCK_TEST_PATTERN,
} from "../../constants.js";
import { createSkipFunction } from "../utils.js";

export const CREATE_TEST_SERVICE_ACTIONS = [
  // Service Tests
  {
    type: "add",
    path: TEST_PATH + "/service/{{kebabCase name}}.service.test.ts",
    templateFile: TEMPLATE_PATH + "/test/service/service.test.hbs",
  },
];

export const MODIFY_TEST_SERVICE_ACTIONS = [
  {
    type: "modify",
    path: TEST_PATH + "/service/{{kebabCase name}}.service.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/test/service/service-method-find-by-params.test.hbs",
    skip: createSkipFunction(READ_MANY_OPERATION, "findByParams service tests"),
  },
  {
    type: "modify",
    path: TEST_PATH + "/service/{{kebabCase name}}.service.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/test/service/service-method-create.test.hbs",
    skip: createSkipFunction(CREATE_ONE_OPERATION, "create service tests"),
  },
  {
    type: "modify",
    path: TEST_PATH + "/service/{{kebabCase name}}.service.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/test/service/service-method-update.test.hbs",
    skip: createSkipFunction(UPDATE_OPERATION, "update service tests"),
  },
  {
    type: "modify",
    path: TEST_PATH + "/service/{{kebabCase name}}.service.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/test/service/service-method-delete.test.hbs",
    skip: createSkipFunction(DELETE_OPERATION, "delete service tests"),
  },
  {
    type: "modify",
    path: TEST_PATH + "/service/{{kebabCase name}}.service.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/test/service/service-method-find.test.hbs",
    skip: createSkipFunction(READ_ONE_OPERATION, "find service tests"),
  },
  {
    type: "modify",
    path: TEST_PATH + "/service/{{kebabCase name}}.service.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/test/service/service-method-create-list.test.hbs",
    skip: createSkipFunction(CREATE_MANY_OPERATION, "create list service tests"),
  },
];

export const TEST_SERVICE_ACTIONS = [
  ...CREATE_TEST_SERVICE_ACTIONS,
  ...MODIFY_TEST_SERVICE_ACTIONS
];

/**
 * Generates test service actions based on the provided data.
 * @param {Object} data - The data to filter the actions.
 * @param {Array} data.operations - The operations to filter the actions.
 * @param {Array} data.skip - The actions to skip.
 * @returns {Array} - The filtered test service actions.
 */
export const generateTestServiceActions = (data) => {
  return TEST_SERVICE_ACTIONS.filter((action) => {
    if (action.skip) {
      return !action.skip(data);
    }
    return true;
  });
};
