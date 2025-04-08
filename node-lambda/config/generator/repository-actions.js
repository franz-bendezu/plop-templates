import { 
  CREATE_ONE_OPERATION, 
  READ_MANY_OPERATION,
  UPDATE_OPERATION,
  DELETE_OPERATION,
  SRC_PATH,
  TEMPLATE_PATH,
  BLOCK_METHOD_PATTERN 
} from "../constants.js";
import { createSkipFunction } from "./utils.js";

export const REPOSITORY_ACTIONS = [
  {
    type: "add",
    path: SRC_PATH + "/repository/{{kebabCase name}}.repository.interface.ts",
    templateFile: TEMPLATE_PATH + "/src/repository/repository-interface.hbs",
  },
  {
    type: "modify",
    path: SRC_PATH + "/repository/{{kebabCase name}}.repository.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/repository/repository-method-find-by-params-interface.hbs",
    skip: createSkipFunction(READ_MANY_OPERATION, "findByParams repository interface method"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/repository/{{kebabCase name}}.repository.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/repository/repository-method-create-interface.hbs",
    skip: createSkipFunction(CREATE_ONE_OPERATION, "create repository interface method"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/repository/{{kebabCase name}}.repository.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/repository/repository-method-update-interface.hbs",
    skip: createSkipFunction(UPDATE_OPERATION, "update repository interface method"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/repository/{{kebabCase name}}.repository.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/repository/repository-method-delete-interface.hbs",
    skip: createSkipFunction(DELETE_OPERATION, "delete repository interface method"),
  },
  {
    type: "add",
    path: SRC_PATH + "/repository/{{kebabCase name}}.repository.ts",
    templateFile: TEMPLATE_PATH + "/src/repository/repository-impl.hbs",
  },
  {
    type: "add",
    path: SRC_PATH + "/repository/query/{{kebabCase name}}.query.ts",
    templateFile: TEMPLATE_PATH + "/src/repository/query/model-query-find-by-params.hbs",
    skip: createSkipFunction(READ_MANY_OPERATION, "findByParams query"),
  },
  {
    type: "add",
    path: SRC_PATH + "/repository/query/{{kebabCase name}}.query.ts",
    templateFile: TEMPLATE_PATH + "/src/repository/query/model-query-create.hbs",
    skip: createSkipFunction(CREATE_ONE_OPERATION, "create query"),
  },
  {
    type: "add",
    path: SRC_PATH + "/repository/query/{{kebabCase name}}.query.ts",
    templateFile: TEMPLATE_PATH + "/src/repository/query/model-query-update.hbs",
    skip: createSkipFunction(UPDATE_OPERATION, "update query"),
  },
  {
    type: "add",
    path: SRC_PATH + "/repository/query/{{kebabCase name}}.query.ts",
    templateFile: TEMPLATE_PATH + "/src/repository/query/model-query-delete.hbs",
    skip: createSkipFunction(DELETE_OPERATION, "delete query"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/repository/{{kebabCase name}}.repository.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/repository/repository-method-find-by-params.hbs",
    skip: createSkipFunction(READ_MANY_OPERATION, "findByParams repository implementation"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/repository/{{kebabCase name}}.repository.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/repository/repository-method-create.hbs",
    skip: createSkipFunction(CREATE_ONE_OPERATION, "create repository implementation"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/repository/{{kebabCase name}}.repository.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/repository/repository-method-update.hbs",
    skip: createSkipFunction(UPDATE_OPERATION, "update repository implementation"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/repository/{{kebabCase name}}.repository.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/repository/repository-method-delete.hbs",
    skip: createSkipFunction(DELETE_OPERATION, "delete repository implementation"),
  },
];
