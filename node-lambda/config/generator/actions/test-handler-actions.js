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

export const CREATE_TEST_HANDLER_ACTIONS = [
  // Handler Tests
  {
    type: "add",
    path: TEST_PATH + "/handler.test.ts",
    templateFile: TEMPLATE_PATH + "/test/handler.test.hbs",
  },
  // Handler Invoker
  {
    type: "add",
    path: TEST_PATH + "/handler-invoker.ts",
    templateFile: TEMPLATE_PATH + "/test/handler-invoker-find-by-params.hbs",
    skip: createSkipFunction(
      READ_MANY_OPERATION,
      "findByParams handler invoker"
    ),
  },
  {
    type: "add",
    path: TEST_PATH + "/handler-invoker.ts",
    templateFile: TEMPLATE_PATH + "/test/handler-invoker-create.hbs",
    skip: createSkipFunction(CREATE_ONE_OPERATION, "create handler invoker"),
  },
  {
    type: "add",
    path: TEST_PATH + "/handler-invoker.ts",
    templateFile: TEMPLATE_PATH + "/test/handler-invoker-update.hbs",
    skip: createSkipFunction(UPDATE_OPERATION, "update handler invoker"),
  },
  {
    type: "add",
    path: TEST_PATH + "/handler-invoker.ts",
    templateFile: TEMPLATE_PATH + "/test/handler-invoker-delete.hbs",
    skip: createSkipFunction(DELETE_OPERATION, "delete handler invoker"),
  },
  // Handler invokers for new operations
  {
    type: "add",
    path: TEST_PATH + "/handler-invoker.ts",
    templateFile: TEMPLATE_PATH + "/test/handler-invoker-find.hbs",
    skip: createSkipFunction(READ_ONE_OPERATION, "find by ID handler invoker"),
  },
  {
    type: "add",
    path: TEST_PATH + "/handler-invoker.ts",
    templateFile: TEMPLATE_PATH + "/test/handler-invoker-create-list.hbs",
    skip: createSkipFunction(CREATE_MANY_OPERATION, "create list handler invoker"),
  },
];

export const MODIFY_TEST_HANDLER_ACTIONS = [
  {
    type: "modify",
    path: TEST_PATH + "/handler.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/test/handler-return-find-by-params.test.hbs",
    skip: createSkipFunction(READ_MANY_OPERATION, "findByParams handler tests"),
  },
  {
    type: "modify",
    path: TEST_PATH + "/handler.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile: TEMPLATE_PATH + "/test/handler-return-create.test.hbs",
    skip: createSkipFunction(CREATE_ONE_OPERATION, "create handler tests"),
  },
  {
    type: "modify",
    path: TEST_PATH + "/handler.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile: TEMPLATE_PATH + "/test/handler-return-update.test.hbs",
    skip: createSkipFunction(UPDATE_OPERATION, "update handler tests"),
  },
  {
    type: "modify",
    path: TEST_PATH + "/handler.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile: TEMPLATE_PATH + "/test/handler-return-delete.test.hbs",
    skip: createSkipFunction(DELETE_OPERATION, "delete handler tests"),
  },
  // Find by ID handler test
  {
    type: "modify",
    path: TEST_PATH + "/handler.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile: TEMPLATE_PATH + "/test/handler-return-find.test.hbs",
    skip: createSkipFunction(READ_ONE_OPERATION, "find by ID handler tests"),
  },
  // Create list handler test
  {
    type: "modify",
    path: TEST_PATH + "/handler.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile: TEMPLATE_PATH + "/test/handler-return-create-list.test.hbs",
    skip: createSkipFunction(CREATE_MANY_OPERATION, "create list handler tests"),
  },
];

export const TEST_HANDLER_ACTIONS = [
  ...CREATE_TEST_HANDLER_ACTIONS,
  ...MODIFY_TEST_HANDLER_ACTIONS
];

/**
 * Generates test handler actions based on the provided data.
 * @param {Object} data - The data to filter the actions.
 * @param {Array} data.operations - The operations to filter the actions.
 * @param {Array} data.skip - The actions to skip.
 * @returns {Array} - The filtered test handler actions.
 */
export const generateTestHandlerActions = (data) => {
  return TEST_HANDLER_ACTIONS.filter((action) => {
    if (action.skip) {
      return !action.skip(data);
    }
    return true;
  });
};
