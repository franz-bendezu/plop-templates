import {
  CREATE_ONE_OPERATION,
  READ_MANY_OPERATION,
  UPDATE_OPERATION,
  DELETE_OPERATION,
  TEST_PATH,
  TEMPLATE_PATH,
  BLOCK_TEST_PATTERN,
} from "../constants.js";
import { createSkipFunction } from "./utils.js";

export const TEST_CONTROLLER_ACTIONS = [
  // Controller Tests
  {
    type: "add",
    path: TEST_PATH + "/controller/{{kebabCase name}}.controller.test.ts",
    templateFile: TEMPLATE_PATH + "/test/controller/controller.test.hbs",
  },
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
];
