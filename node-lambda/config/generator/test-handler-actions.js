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

export const TEST_HANDLER_ACTIONS = [
  // Handler Tests
  {
    type: "add",
    path: TEST_PATH + "/handler.test.ts",
    templateFile: TEMPLATE_PATH + "/test/handler.test.hbs",
  },
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
];
