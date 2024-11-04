import {
  BLOCK_METHOD_PATTERN,
  FOLDER_PATH,
  SRC_PATH,
  TEST_PATH,
  TEMPLATE_PATH,
} from "./constants";

export const GENERATOR_CONFIG = {
  description: "Generate a handler for a new resource",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Resource name",
    },
    {
      type: "input",
      name: "moduleName",
      message: "Resource path",
    },
    {
      type: "input",
      name: "folder",
      message: "Resource folder",
    },
  ],
  actions: [
    {
      type: "add",
      path: SRC_PATH + "/interface/{{kebabCase name}}.interface.ts",
      templateFile: TEMPLATE_PATH + "/src/interface/model-interface.hbs",
    },
    {
      type: "add",
      path: SRC_PATH + "/model/{{kebabCase name}}.model.ts",
      templateFile: TEMPLATE_PATH + "/src/model.hbs",
    },
    {
      type: "add",
      path: SRC_PATH + "/interface/{{kebabCase name}}-params.interface.ts",
      templateFile: TEMPLATE_PATH + "/src/interface/params-interface.hbs",
    },
    {
      type: "add",
      path:
        SRC_PATH + "/interface/{{kebabCase name}}-query-result.interface.ts",
      templateFile: TEMPLATE_PATH + "/src/interface/query-result-interface.hbs",
    },
    {
      type: "add",
      path: SRC_PATH + "/repository/{{kebabCase name}}.repository.interface.ts",
      templateFile: TEMPLATE_PATH + "/src/repository/repository-interface.hbs",
    },
    {
      type: "add",
      path: SRC_PATH + "/repository/{{kebabCase name}}.repository.ts",
      templateFile: TEMPLATE_PATH + "/src/repository/repository-impl.hbs",
    },
    {
      type: "add",
      path: SRC_PATH + "/service/{{kebabCase name}}.service.interface.ts",
      templateFile: TEMPLATE_PATH + "/src/service/service-interface.hbs",
    },
    {
      type: "add",
      path: SRC_PATH + "/service/{{kebabCase name}}.service.ts",
      templateFile: TEMPLATE_PATH + "/src/service/service-impl.hbs",
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
        TEMPLATE_PATH +
        "/src/controller/controller-interface-find-by-params.hbs",
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
    },
    {
      type: "add",
      path: SRC_PATH + "/dto/{{kebabCase name}}-params.dto.ts",
      templateFile: TEMPLATE_PATH + "/src/dto-params.hbs",
    },
    {
      type: "add",
      path: SRC_PATH + "/dto/{{kebabCase name}}.dto.ts",
      templateFile: TEMPLATE_PATH + "/src/dto.hbs",
    },

    {
      type: "add",
      path: SRC_PATH + "/handler.ts",
      templateFile: TEMPLATE_PATH + "/src/handler.hbs",
    },

    {
      type: "add",
      path: SRC_PATH + "/controller/{{kebabCase name}}.provider.ts",
      templateFile: TEMPLATE_PATH + "/src/controller/provider.ts.hbs",
    },

    // copy common folder with subfolfers and files inside
    {
      type: "addMany",
      destination: SRC_PATH + "/common",
      base: TEMPLATE_PATH + "/src/common",
      templateFiles: TEMPLATE_PATH + "/src/common/**/*.hbs",
    },
    {
      type: "addMany",
      destination: SRC_PATH + "/config",
      base: TEMPLATE_PATH + "/src/config/",
      templateFiles: TEMPLATE_PATH + "/src/config/**/*.hbs",
    },
    {
      type: "addMany",
      destination: TEST_PATH + "/config",
      base: TEMPLATE_PATH + "/test/config/",
      templateFiles: TEMPLATE_PATH + "/test/config/**/*",
    },
    {
      type: "addMany",
      destination: TEST_PATH + "/common",
      base: TEMPLATE_PATH + "/test/common/",
      templateFiles: TEMPLATE_PATH + "/test/common/**/*",
    },
    {
      type: "add",
      path: TEST_PATH + "/controller/{{kebabCase name}}.controller.test.ts",
      templateFile: TEMPLATE_PATH + "/test/controller/controller.test.ts.hbs",
    },
    {
      type: "add",
      path: TEST_PATH + "/repository/{{kebabCase name}}.repository.test.ts",
      templateFile: TEMPLATE_PATH + "/test/repository/repository.test.ts.hbs",
    },
    {
      type: "add",
      path: TEST_PATH + "/service/{{kebabCase name}}.service.test.ts",
      templateFile: TEMPLATE_PATH + "/test/service/service.test.ts.hbs",
    },
    {
      type: "add",
      path: TEST_PATH + "/handler.test.ts",
      templateFile: TEMPLATE_PATH + "/test/handler.test.ts.hbs",
    },
    {
      type: "append",
      path: FOLDER_PATH + "/package.json",
      pattern: /"devDependencies": {(?<insertion>)/g,
      template: `    "@aws-sdk/client-secrets-manager": "^3.668.0",
    "@types/aws-lambda": "^8.10.145",
    "aws-sdk-client-mock": "^4.0.2",
    "jest": "^29.7.0",`,
    },
    {
      type: "append",
      path: FOLDER_PATH + "/package.json",
      pattern: /"dependencies": {(?<insertion>)/g,
      template: `    "@joi/date": "^2.1.1",
    "joi": "^17.13.3",`,
    },
    // upgrade devDependencies to latest version, first remove the old version
    // "serverless-offline": "^13.6.0",
    // "serverless": "^3.31.0",
    {
      type: "upgradeDevDependencies",
    },
  ],
};
