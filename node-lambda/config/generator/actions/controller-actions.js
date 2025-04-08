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

export const CREATE_CONTROLLER_ACTIONS = [
  {
    type: "add",
    path: SRC_PATH + "/controller/{{kebabCase name}}.controller.interface.ts",
    templateFile: TEMPLATE_PATH + "/src/controller/controller-interface.hbs",
  },
  {
    type: "add",
    path: SRC_PATH + "/controller/{{kebabCase name}}.controller.ts",
    templateFile: TEMPLATE_PATH + "/src/controller/controller-impl.hbs",
  },
  {
    type: "add",
    path: SRC_PATH + "/controller/{{kebabCase name}}.provider.ts",
    templateFile: TEMPLATE_PATH + "/src/controller/module.provider.ts.hbs",
  },
];

export const MODIFY_CONTROLLER_ACTIONS = [
  {
    type: "modify",
    path: SRC_PATH + "/controller/{{kebabCase name}}.controller.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/controller/controller-interface-find-by-params.hbs",
    skip: createSkipFunction(READ_MANY_OPERATION, "findByParams controller interface method"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/controller/{{kebabCase name}}.controller.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/controller/controller-method-create-interface.hbs",
    skip: createSkipFunction(CREATE_ONE_OPERATION, "create controller interface method"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/controller/{{kebabCase name}}.controller.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/controller/controller-method-update-interface.hbs",
    skip: createSkipFunction(UPDATE_OPERATION, "update controller interface method"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/controller/{{kebabCase name}}.controller.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/controller/controller-method-delete-interface.hbs",
    skip: createSkipFunction(DELETE_OPERATION, "delete controller interface method"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/controller/{{kebabCase name}}.controller.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/controller/controller-method-find-interface.hbs",
    skip: createSkipFunction(READ_ONE_OPERATION, "find by ID controller interface method"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/controller/{{kebabCase name}}.controller.interface.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/controller/controller-method-create-list-interface.hbs",
    skip: createSkipFunction(CREATE_MANY_OPERATION, "create list controller interface method"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/controller/{{kebabCase name}}.controller.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/controller/controller-find-by-params.hbs",
    skip: createSkipFunction(READ_MANY_OPERATION, "findByParams controller implementation"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/controller/{{kebabCase name}}.controller.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/controller/controller-method-create.hbs",
    skip: createSkipFunction(CREATE_ONE_OPERATION, "create controller implementation"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/controller/{{kebabCase name}}.controller.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/controller/controller-method-update.hbs",
    skip: createSkipFunction(UPDATE_OPERATION, "update controller implementation"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/controller/{{kebabCase name}}.controller.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/controller/controller-method-delete.hbs",
    skip: createSkipFunction(DELETE_OPERATION, "delete controller implementation"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/controller/{{kebabCase name}}.controller.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/controller/controller-method-find.hbs",
    skip: createSkipFunction(READ_ONE_OPERATION, "find by ID controller implementation"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/controller/{{kebabCase name}}.controller.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/controller/controller-method-create-list.hbs",
    skip: createSkipFunction(CREATE_MANY_OPERATION, "create list controller implementation"),
  },
];

export const CONTROLLER_ACTIONS = [
  ...CREATE_CONTROLLER_ACTIONS,
  ...MODIFY_CONTROLLER_ACTIONS
];
