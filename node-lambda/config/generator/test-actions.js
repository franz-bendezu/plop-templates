import {
  CREATE_ONE_OPERATION,
  READ_MANY_OPERATION,
  UPDATE_OPERATION,
  DELETE_OPERATION,
  SRC_PATH,
  TEST_PATH,
  TEMPLATE_PATH,
  BLOCK_TEST_PATTERN,
} from "../constants.js";
import { createSkipFunction } from "./utils.js";

export const TEST_ACTIONS = [
  {
    type: "addMany",
    destination: TEST_PATH + "/common",
    base: TEMPLATE_PATH + "/test/common",
    templateFiles: TEMPLATE_PATH + "/test/common/**/*.ts.hbs",
  },
  {
    type: "addMany",
    destination: TEST_PATH + "/config",
    base: TEMPLATE_PATH + "/test/config",
    templateFiles: TEMPLATE_PATH + "/test/config/**/*.ts.hbs",
  },
  // Model Tests
  {
    type: "add",
    path: TEST_PATH + "/model/{{kebabCase name}}.model.test.ts",
    templateFile: TEMPLATE_PATH + "/test/model/model.model.test.hbs",
  },
  {
    type: "add",
    path: TEST_PATH + "/model/base-{{kebabCase name}}.model.test.ts",
    templateFile: TEMPLATE_PATH + "/test/model/base-model.model.test.hbs",
    skip: createSkipFunction(
      [CREATE_ONE_OPERATION, UPDATE_OPERATION],
      "base model tests"
    ),
  },
  // DTO Tests
  {
    type: "addMany",
    destination: TEST_PATH + "/dto",
    base: TEMPLATE_PATH + "/test/dto",
    templateFiles: TEMPLATE_PATH + "/test/dto/**/*.ts.hbs",
  },
  {
    type: "add",
    path: TEST_PATH + "/dto/{{kebabCase name}}-params.dto.test.ts",
    templateFile: TEMPLATE_PATH + "/test/dto/model-params.dto.test.hbs",
    skip: createSkipFunction(
      [READ_MANY_OPERATION, DELETE_OPERATION, UPDATE_OPERATION],
      "params DTO tests"
    ),
  },
  {
    type: "add",
    path: TEST_PATH + "/dto/base-{{kebabCase name}}.dto.test.ts",
    templateFile: TEMPLATE_PATH + "/test/dto/base-model.dto.test.hbs",
    skip: createSkipFunction(
      [CREATE_ONE_OPERATION, UPDATE_OPERATION],
      "base DTO tests"
    ),
  },
  // Repository Tests
  {
    type: "add",
    path: TEST_PATH + "/repository/{{kebabCase name}}.repository.test.ts",
    templateFile: TEMPLATE_PATH + "/test/repository/repository.test.hbs",
  },
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
  // Service Tests
  {
    type: "add",
    path: TEST_PATH + "/service/{{kebabCase name}}.service.test.ts",
    templateFile: TEMPLATE_PATH + "/test/service/service.test.hbs",
  },
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
