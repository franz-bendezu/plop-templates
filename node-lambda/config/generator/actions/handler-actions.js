import { 
  CREATE_ONE_OPERATION, 
  READ_MANY_OPERATION,
  UPDATE_OPERATION,
  DELETE_OPERATION,
  CREATE_MANY_OPERATION,
  READ_ONE_OPERATION,
  SRC_PATH,
  TEMPLATE_PATH
} from "../../constants.js";
import { createSkipFunction } from "../utils.js";

export const CREATE_HANDLER_ACTIONS = [
  {
    type: "add",
    path: SRC_PATH + "/handler.ts",
    templateFile: TEMPLATE_PATH + "/src/handler.ts.hbs",
  },
];

export const MODIFY_HANDLER_ACTIONS = [
  {
    type: "modify",
    path: SRC_PATH + "/handler.ts",
    pattern: /(?<imports>\/\/\s*Imports)(?<code>[\s\S]*?)(?<return>\/\/\s*Return)/gi,
    templateFile: TEMPLATE_PATH + "/src/handler-return-find-by-params.hbs",
    skip: createSkipFunction(READ_MANY_OPERATION, "findByParams handler implementation"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/handler.ts",
    pattern: /(?<imports>\/\/\s*Imports)(?<code>[\s\S]*?)(?<return>\/\/\s*Return)/gi,
    templateFile: TEMPLATE_PATH + "/src/handler-return-create.hbs",
    skip: createSkipFunction(CREATE_ONE_OPERATION, "create handler implementation"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/handler.ts",
    pattern: /(?<imports>\/\/\s*Imports)(?<code>[\s\S]*?)(?<return>\/\/\s*Return)/gi,
    templateFile: TEMPLATE_PATH + "/src/handler-return-update.hbs",
    skip: createSkipFunction(UPDATE_OPERATION, "update handler implementation"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/handler.ts",
    pattern: /(?<imports>\/\/\s*Imports)(?<code>[\s\S]*?)(?<return>\/\/\s*Return)/gi,
    templateFile: TEMPLATE_PATH + "/src/handler-return-delete.hbs",
    skip: createSkipFunction(DELETE_OPERATION, "delete handler implementation"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/handler.ts",
    pattern: /(?<imports>\/\/\s*Imports)(?<code>[\s\S]*?)(?<return>\/\/\s*Return)/gi,
    templateFile: TEMPLATE_PATH + "/src/handler-return-find.hbs",
    skip: createSkipFunction(READ_ONE_OPERATION, "find by ID handler implementation"),
  },
  {
    type: "modify",
    path: SRC_PATH + "/handler.ts",
    pattern: /(?<imports>\/\/\s*Imports)(?<code>[\s\S]*?)(?<return>\/\/\s*Return)/gi,
    templateFile: TEMPLATE_PATH + "/src/handler-return-create-list.hbs",
    skip: createSkipFunction(CREATE_MANY_OPERATION, "create list handler implementation"),
  },
];

export const HANDLER_ACTIONS = [
  ...CREATE_HANDLER_ACTIONS,
  ...MODIFY_HANDLER_ACTIONS
];
