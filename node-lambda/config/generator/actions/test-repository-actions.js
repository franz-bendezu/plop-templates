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

export const CREATE_TEST_REPOSITORY_ACTIONS = [
  // Repository Tests
  {
    type: "add",
    path: TEST_PATH + "/repository/{{kebabCase name}}.repository.test.ts",
    templateFile: TEMPLATE_PATH + "/test/repository/repository.test.hbs",
  },
];

export const MODIFY_TEST_REPOSITORY_ACTIONS = [
  {
    type: "modify",
    path: TEST_PATH + "/repository/{{kebabCase name}}.repository.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH +
      "/test/repository/repository-method-find-by-params.test.hbs",
    skip: createSkipFunction(
      READ_MANY_OPERATION,
      "findByParams repository tests"
    ),
  },
  {
    type: "modify",
    path: TEST_PATH + "/repository/{{kebabCase name}}.repository.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/test/repository/repository-method-create.test.hbs",
    skip: createSkipFunction(CREATE_ONE_OPERATION, "create repository tests"),
  },
  {
    type: "modify",
    path: TEST_PATH + "/repository/{{kebabCase name}}.repository.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/test/repository/repository-method-update.test.hbs",
    skip: createSkipFunction(UPDATE_OPERATION, "update repository tests"),
  },
  {
    type: "modify",
    path: TEST_PATH + "/repository/{{kebabCase name}}.repository.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/test/repository/repository-method-delete.test.hbs",
    skip: createSkipFunction(DELETE_OPERATION, "delete repository tests"),
  },
  {
    type: "modify",
    path: TEST_PATH + "/repository/{{kebabCase name}}.repository.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/test/repository/repository-method-find.test.hbs",
    skip: createSkipFunction(READ_ONE_OPERATION, "find repository tests"),
  },
  {
    type: "modify",
    path: TEST_PATH + "/repository/{{kebabCase name}}.repository.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/test/repository/repository-method-create-list.test.hbs",
    skip: createSkipFunction(CREATE_MANY_OPERATION, "create list repository tests"),
  },
];

export const TEST_REPOSITORY_ACTIONS = [
  ...CREATE_TEST_REPOSITORY_ACTIONS,
  ...MODIFY_TEST_REPOSITORY_ACTIONS
];

/**
 * Generates test repository actions based on the provided data.
 * @param {Object} data - The data to filter the actions.
 * @param {Array} data.operations - The operations to filter the actions.
 * @param {Array} data.skip - The actions to skip.
 * @returns {Array} - The filtered test repository actions.
 */
export const generateTestRepositoryActions = (data) => {
  return TEST_REPOSITORY_ACTIONS.filter((action) => {
    if (action.skip) {
      return !action.skip(data);
    }
    return true;
  });
};
