import { 
  CREATE_ONE_OPERATION, 
  READ_MANY_OPERATION,
  UPDATE_OPERATION,
  DELETE_OPERATION,
  CREATE_MANY_OPERATION,
  READ_ONE_OPERATION,
  SRC_PATH,
  TEMPLATE_PATH,
  BLOCK_METHOD_PATTERN 
} from "../../constants.js";
import { createSkipFunction } from "../utils.js";

export const CREATE_REPOSITORY_ACTIONS = [
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
    type: "add",
    path: SRC_PATH + "/repository/query/{{kebabCase name}}.query.ts",
    templateFile: TEMPLATE_PATH + "/src/repository/query/model-query-find-by-id.hbs",
    skip: createSkipFunction(READ_ONE_OPERATION, "find by ID query"),
  },
  {
    type: "add",
    path: SRC_PATH + "/repository/query/{{kebabCase name}}.query.ts",
    templateFile: TEMPLATE_PATH + "/src/repository/query/model-query-create-batch.hbs",
    skip: createSkipFunction(CREATE_MANY_OPERATION, "create batch query"),
  },
];

export const MODIFY_REPOSITORY_ACTIONS = [
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
    type: "modify",
    path: SRC_PATH + "/repository/{{kebabCase name}}.repository.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/repository/repository-method-find-interface.hbs",
    skip: createSkipFunction(READ_ONE_OPERATION, "find by ID repository interface method"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/repository/{{kebabCase name}}.repository.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/repository/repository-method-create-list-interface.hbs",
    skip: createSkipFunction(CREATE_MANY_OPERATION, "create list repository interface method"),
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
  {
    type: "modify",
    path: SRC_PATH + "/repository/{{kebabCase name}}.repository.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/repository/repository-method-find.hbs",
    skip: createSkipFunction(READ_ONE_OPERATION, "find by ID repository implementation"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/repository/{{kebabCase name}}.repository.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/repository/repository-method-create-list.hbs",
    skip: createSkipFunction(CREATE_MANY_OPERATION, "create list repository implementation"),
  },
];

export const REPOSITORY_ACTIONS = [
  ...CREATE_REPOSITORY_ACTIONS,
  ...MODIFY_REPOSITORY_ACTIONS
];
