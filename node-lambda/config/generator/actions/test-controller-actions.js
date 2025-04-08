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

export const CREATE_TEST_CONTROLLER_ACTIONS = [
  // Controller Tests
  {
    type: "add",
    path: TEST_PATH + "/controller/{{kebabCase name}}.controller.test.ts",
    templateFile: TEMPLATE_PATH + "/test/controller/controller.test.hbs",
  },
];

export const MODIFY_TEST_CONTROLLER_ACTIONS = [
  {
    type: "modify",
    path: TEST_PATH + "/controller/{{kebabCase name}}.controller.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH +
      "/test/controller/controller-method-find-by-params.test.hbs",
    skip: createSkipFunction(
      READ_MANY_OPERATION,
      "findByParams controller tests"
    ),
  },
  {
    type: "modify",
    path: TEST_PATH + "/controller/{{kebabCase name}}.controller.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/test/controller/controller-method-create.test.hbs",
    skip: createSkipFunction(CREATE_ONE_OPERATION, "create controller tests"),
  },
  {
    type: "modify",
    path: TEST_PATH + "/controller/{{kebabCase name}}.controller.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/test/controller/controller-method-update.test.hbs",
    skip: createSkipFunction(UPDATE_OPERATION, "update controller tests"),
  },
  {
    type: "modify",
    path: TEST_PATH + "/controller/{{kebabCase name}}.controller.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/test/controller/controller-method-delete.test.hbs",
    skip: createSkipFunction(DELETE_OPERATION, "delete controller tests"),
  },
  {
    type: "modify",
    path: TEST_PATH + "/controller/{{kebabCase name}}.controller.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/test/controller/controller-method-find.test.hbs",
    skip: createSkipFunction(READ_ONE_OPERATION, "find controller tests"),
  },
  {
    type: "modify",
    path: TEST_PATH + "/controller/{{kebabCase name}}.controller.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/test/controller/controller-method-create-list.test.hbs",
    skip: createSkipFunction(CREATE_MANY_OPERATION, "create list controller tests"),
  },
];

export const TEST_CONTROLLER_ACTIONS = [
  ...CREATE_TEST_CONTROLLER_ACTIONS,
  ...MODIFY_TEST_CONTROLLER_ACTIONS
];
