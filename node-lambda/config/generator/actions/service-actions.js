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

export const SERVICE_ACTIONS = [
  {
    type: "add",
    path: SRC_PATH + "/service/{{kebabCase name}}.service.interface.ts",
    templateFile: TEMPLATE_PATH + "/src/service/service-interface.hbs",
  },
  {
    type: "modify",
    path: SRC_PATH + "/service/{{kebabCase name}}.service.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/service/service-method-find-by-params-interface.hbs",
    skip: createSkipFunction(READ_MANY_OPERATION, "findByParams method interface"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/service/{{kebabCase name}}.service.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/service/service-method-create-interface.hbs",
    skip: createSkipFunction(CREATE_ONE_OPERATION, "create method interface"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/service/{{kebabCase name}}.service.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/service/service-method-update-interface.hbs",
    skip: createSkipFunction(UPDATE_OPERATION, "update method interface"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/service/{{kebabCase name}}.service.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/service/service-method-delete-interface.hbs",
    skip: createSkipFunction(DELETE_OPERATION, "delete method interface"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/service/{{kebabCase name}}.service.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/service/service-method-find-interface.hbs",
    skip: createSkipFunction(READ_ONE_OPERATION, "find by ID method interface"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/service/{{kebabCase name}}.service.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/service/service-method-create-list-interface.hbs",
    skip: createSkipFunction(CREATE_MANY_OPERATION, "create list method interface"),
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
    templateFile: TEMPLATE_PATH + "/src/service/service-method-find-by-params.hbs",
    skip: createSkipFunction(READ_MANY_OPERATION, "findByParams method implementation"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/service/{{kebabCase name}}.service.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/service/service-method-create.hbs",
    skip: createSkipFunction(CREATE_ONE_OPERATION, "create method implementation"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/service/{{kebabCase name}}.service.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/service/service-method-update.hbs",
    skip: createSkipFunction(UPDATE_OPERATION, "update method implementation"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/service/{{kebabCase name}}.service.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/service/service-method-delete.hbs",
    skip: createSkipFunction(DELETE_OPERATION, "delete method implementation"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/service/{{kebabCase name}}.service.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/service/service-method-find.hbs",
    skip: createSkipFunction(READ_ONE_OPERATION, "find by ID method implementation"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/service/{{kebabCase name}}.service.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/service/service-method-create-list.hbs",
    skip: createSkipFunction(CREATE_MANY_OPERATION, "create list method implementation"),
  },
];
