import test, { skip } from "node:test";
import {
  BLOCK_METHOD_PATTERN,
  SRC_PATH,
  TEST_PATH,
  TEMPLATE_PATH,
  BLOCK_RESPONSE_PATTERN,
  BLOCK_TEST_PATTERN,
} from "../constants.js";
import path from "path";

export const GENERATOR_ACTIONS = [
  {
    type: "addMany",
    destination: SRC_PATH,
    base: TEMPLATE_PATH + "/src",
    templateFiles: TEMPLATE_PATH + "/src/**/*.ts.hbs",
  },
  {
    type: "add",
    path: SRC_PATH + "/model/{{kebabCase name}}.model.ts",
    templateFile: TEMPLATE_PATH + "/src/model/model.hbs",
    skip: (answers) => (answers.operation !== "read" ? "Skip" : undefined),
  },
  {
    type: "add",
    path: SRC_PATH + "/model/{{kebabCase name}}.model.ts",
    templateFile: TEMPLATE_PATH + "/src/model/model-saved.hbs",
    skip: (answers) => (answers.operation !== "create" ? "Skip" : undefined),
  },
  {
    type: "add",
    path: SRC_PATH + "/model/base-{{kebabCase name}}.model.ts",
    templateFile: TEMPLATE_PATH + "/src/model/base-model.hbs",
    skip: (answers) => (answers.operation !== "create" ? "Skip" : undefined),
  },
  {
    type: "add",
    path: SRC_PATH + "/common/schema/{{kebabCase name}}.schema.ts",
    templateFile: TEMPLATE_PATH + "/src/common/schema/model.schema.hbs",
    skip: (answers) => (answers.operation !== "create" ? "Skip" : undefined),
  },
  {
    type: "add",
    path: SRC_PATH + "/common/schema/{{kebabCase name}}-params.schema.ts",
    templateFile: TEMPLATE_PATH + "/src/common/schema/model-params.schema.hbs",
    skip: (answers) => (answers.operation !== "read" ? "Skip" : undefined),
  },
  {
    type: "add",
    path: SRC_PATH + "/interface/{{kebabCase name}}.interface.ts",
    templateFile: TEMPLATE_PATH + "/src/interface/model.interface.hbs",
    skip: (answers) => (answers.operation !== "read" ? "Skip" : undefined),
  },
  {
    type: "add",
    path: SRC_PATH + "/interface/{{kebabCase name}}.interface.ts",
    templateFile: TEMPLATE_PATH + "/src/interface/model-saved.interface.hbs",
    skip: (answers) => (answers.operation !== "create" ? "Skip" : undefined),
  },
  {
    type: "add",
    path: SRC_PATH + "/dto/{{kebabCase name}}.dto.ts",
    templateFile: TEMPLATE_PATH + "/src/dto/model-dto.hbs",
    skip: (answers) => (answers.operation !== "read" ? "Skip" : undefined),
  },
  {
    type: "add",
    path: SRC_PATH + "/dto/{{kebabCase name}}.dto.ts",
    templateFile: TEMPLATE_PATH + "/src/dto/model-dto-saved.hbs",
    skip: (answers) => (answers.operation !== "create" ? "Skip" : undefined),
  },
  {
    type: "add",
    path: SRC_PATH + "/dto/{{kebabCase name}}-params.dto.ts",
    templateFile: TEMPLATE_PATH + "/src/dto/model-dto-params.hbs",
    skip: (answers) => (answers.operation !== "read" ? "Skip" : undefined),
  },
  {
    type: "modify",
    path: SRC_PATH + "/dto/base-{{kebabCase name}}.dto.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/dto/base-dto-method-from-body.hbs",
    skip: (answers) => (answers.operation !== "create" ? "Skip" : undefined),
  },
  {
    type: "add",
    path: SRC_PATH + "/repository/{{kebabCase name}}.repository.interface.ts",
    templateFile: TEMPLATE_PATH + "/src/repository/repository-interface.hbs",
  },
  {
    type: "modify",
    path: SRC_PATH + "/repository/{{kebabCase name}}.repository.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile:
      TEMPLATE_PATH +
      "/src/repository/repository-method-find-by-params-interface.hbs",
    skip: (answers) => (answers.operation !== "read" ? "Skip" : undefined),
  },
  {
    type: "modify",
    path: SRC_PATH + "/repository/{{kebabCase name}}.repository.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/src/repository/repository-method-create-interface.hbs",
    skip: (answers) => (answers.operation !== "create" ? "Skip" : undefined),
  },
  {
    type: "add",
    path: SRC_PATH + "/repository/{{kebabCase name}}.repository.ts",
    templateFile: TEMPLATE_PATH + "/src/repository/repository-impl.hbs",
  },
  {
    type: "add",
    path: SRC_PATH + "/repository/query/{{kebabCase name}}.query.ts",
    templateFile:
      TEMPLATE_PATH + "/src/repository/query/model-query-find-by-params.hbs",
    skip: (answers) => (answers.operation !== "read" ? "Skip" : undefined),
  },
  {
    type: "add",
    path: SRC_PATH + "/repository/query/{{kebabCase name}}.query.ts",
    templateFile:
      TEMPLATE_PATH + "/src/repository/query/model-query-create.hbs",
    skip: (answers) => (answers.operation !== "create" ? "Skip" : undefined),
  },
  {
    type: "modify",
    path: SRC_PATH + "/repository/{{kebabCase name}}.repository.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/src/repository/repository-find-by-params.hbs",
    skip: (answers) => (answers.operation !== "read" ? "Skip" : undefined),
  },
  {
    type: "modify",
    path: SRC_PATH + "/repository/{{kebabCase name}}.repository.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/src/repository/repository-method-create.hbs",
    skip: (answers) => (answers.operation !== "create" ? "Skip" : undefined),
  },
  {
    type: "add",
    path: SRC_PATH + "/service/{{kebabCase name}}.service.interface.ts",
    templateFile: TEMPLATE_PATH + "/src/service/service-interface.hbs",
  },
  {
    type: "modify",
    path: SRC_PATH + "/service/{{kebabCase name}}.service.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile:
      TEMPLATE_PATH +
      "/src/service/service-method-find-by-params-interface.hbs",
    skip: (answers) => (answers.operation !== "read" ? "Skip" : undefined),
  },
  {
    type: "modify",
    path: SRC_PATH + "/service/{{kebabCase name}}.service.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/src/service/service-method-create-interface.hbs",
    skip: (answers) => (answers.operation !== "create" ? "Skip" : undefined),
  },
  {
    type: "add",
    path: SRC_PATH + "/service/{{kebabCase name}}.service.ts",
    templateFile: TEMPLATE_PATH + "/src/service/service-impl.hbs",
  },
  {
    type: "modify",
    path: SRC_PATH + "/service/{{kebabCase name}}.service.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/service/service-find-by-params.hbs",
    skip: (answers) => (answers.operation !== "read" ? "Skip" : undefined),
  },
  {
    type: "modify",
    path: SRC_PATH + "/service/{{kebabCase name}}.service.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/service/service-method-create.hbs",
    skip: (answers) => (answers.operation !== "create" ? "Skip" : undefined),
  },
  {
    type: "add",
    path: SRC_PATH + "/controller/{{kebabCase name}}.controller.interface.ts",
    templateFile: TEMPLATE_PATH + "/src/controller/controller-interface.hbs",
  },
  {
    type: "modify",
    path: SRC_PATH + "/controller/{{kebabCase name}}.controller.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/src/controller/controller-interface-find-by-params.hbs",
    skip: (answers) => (answers.operation !== "read" ? "Skip" : undefined),
  },
  {
    type: "modify",
    path: SRC_PATH + "/controller/{{kebabCase name}}.controller.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/src/controller/controller-method-create-interface.hbs",
    skip: (answers) => (answers.operation !== "create" ? "Skip" : undefined),
  },
  {
    type: "add",
    path: SRC_PATH + "/controller/{{kebabCase name}}.controller.ts",
    templateFile: TEMPLATE_PATH + "/src/controller/controller-impl.hbs",
  },
  {
    type: "modify",
    path: SRC_PATH + "/controller/{{kebabCase name}}.controller.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/src/controller/controller-find-by-params.hbs",
    skip: (answers) => (answers.operation !== "read" ? "Skip" : undefined),
  },
  {
    type: "modify",
    path: SRC_PATH + "/controller/{{kebabCase name}}.controller.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/src/controller/controller-method-create.hbs",
    skip: (answers) => (answers.operation !== "create" ? "Skip" : undefined),
  },
  {
    type: "modify",
    path: SRC_PATH + "/handler.ts",
    pattern: BLOCK_RESPONSE_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/handler-return-find-by-params.hbs",
    skip: (answers) => (answers.operation !== "read" ? "Skip" : undefined),
  },

  {
    type: "modify",
    path: SRC_PATH + "/handler.ts",
    pattern: BLOCK_RESPONSE_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/handler-return-create.hbs",
    skip: (answers) => (answers.operation !== "create" ? "Skip" : undefined),
  },
  {
    type: "addMany",
    destination: TEST_PATH,
    base: TEMPLATE_PATH + "/test",
    templateFiles: TEMPLATE_PATH + "/test/**/*.ts.hbs",
  },
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
    skip: (answers) => (answers.operation !== "read" ? "Skip" : undefined),
  },
  {
    type: "modify",
    path: TEST_PATH + "/controller/{{kebabCase name}}.controller.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/test/controller/controller-method-create.test.hbs",
    skip: (answers) => (answers.operation !== "create" ? "Skip" : undefined),
  },
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
    skip: (answers) => (answers.operation !== "read" ? "Skip" : undefined),
  },
  {
    type: "modify",
    path: TEST_PATH + "/repository/{{kebabCase name}}.repository.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/test/repository/repository-method-create.test.hbs",
    skip: (answers) => (answers.operation !== "create" ? "Skip" : undefined),
  },
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
    skip: (answers) => (answers.operation !== "read" ? "Skip" : undefined),
  },
  {
    type: "modify",
    path: TEST_PATH + "/service/{{kebabCase name}}.service.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile:
      TEMPLATE_PATH + "/test/service/service-method-create.test.hbs",
    skip: (answers) => (answers.operation !== "create" ? "Skip" : undefined),
  },
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
    skip: (answers) => (answers.operation !== "read" ? "Skip" : undefined),
  },
  {
    type: "modify",
    path: TEST_PATH + "/handler.test.ts",
    pattern: BLOCK_TEST_PATTERN,
    templateFile: TEMPLATE_PATH + "/test/handler-return-create.test.hbs",
    skip: (answers) => (answers.operation !== "create" ? "Skip" : undefined),
  },
  {
    type: "add",
    path: TEST_PATH + "/handler-invoker.ts",
    templateFile: TEMPLATE_PATH + "/test/handler-invoker-find-by-params.hbs",
    pattern: BLOCK_TEST_PATTERN,
    skip: (answers) => (answers.operation !== "read" ? "Skip" : undefined),
  },
  {
    type: "add",
    path: TEST_PATH + "/handler-invoker.ts",
    templateFile: TEMPLATE_PATH + "/test/handler-invoker-create.hbs",
    pattern: BLOCK_TEST_PATTERN,
    skip: (answers) => (answers.operation !== "create" ? "Skip" : undefined),
  },
  {
    type: "upgradeDevDependencies",
  },
];
