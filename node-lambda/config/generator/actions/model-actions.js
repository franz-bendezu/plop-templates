import { 
  CREATE_ONE_OPERATION, 
  READ_MANY_OPERATION,
  UPDATE_OPERATION,
  DELETE_OPERATION,
  SRC_PATH,
  TEMPLATE_PATH,
  BLOCK_METHOD_PATTERN 
} from "../../constants.js";
import { createSkipFunction } from "../utils.js";

export const CREATE_MODEL_ACTIONS = [
  {
    type: "addMany",
    destination: SRC_PATH + "/dto",
    base: TEMPLATE_PATH + "/src/dto",
    templateFiles: TEMPLATE_PATH + "/src/dto/**/*.ts.hbs",
  },
  {
    type: "addMany",
    destination: SRC_PATH + "/interface",
    base: TEMPLATE_PATH + "/src/interface",
    templateFiles: TEMPLATE_PATH + "/src/interface/**/*.ts.hbs",
  },
  {
    type: "add",
    path: SRC_PATH + "/model/{{kebabCase name}}.model.ts",
    templateFile: TEMPLATE_PATH + "/src/model/model.hbs",
    skip: createSkipFunction(READ_MANY_OPERATION, "read model"),
  },
  {
    type: "add",
    path: SRC_PATH + "/model/{{kebabCase name}}.model.ts",
    templateFile: TEMPLATE_PATH + "/src/model/model-saved.hbs",
    skip: createSkipFunction([CREATE_ONE_OPERATION, UPDATE_OPERATION, DELETE_OPERATION], "model with save operations"),
  },
  {
    type: "add",
    path: SRC_PATH + "/model/base-{{kebabCase name}}.model.ts",
    templateFile: TEMPLATE_PATH + "/src/model/base-model.hbs",
    skip: createSkipFunction([CREATE_ONE_OPERATION, UPDATE_OPERATION], "base model"),
  },
  {
    type: "add",
    path: SRC_PATH + "/common/schema/{{kebabCase name}}.schema.ts",
    templateFile: TEMPLATE_PATH + "/src/common/schema/model.schema.hbs",
    skip: createSkipFunction([CREATE_ONE_OPERATION, UPDATE_OPERATION], "model schema"),
  },
  {
    type: "add",
    path: SRC_PATH + "/common/schema/{{kebabCase name}}-params.schema.ts",
    templateFile: TEMPLATE_PATH + "/src/common/schema/model-params.schema.hbs",
    skip: createSkipFunction([READ_MANY_OPERATION, DELETE_OPERATION, UPDATE_OPERATION], "model params schema"),
  },
  {
    type: "add",
    path: SRC_PATH + "/interface/{{kebabCase name}}.interface.ts",
    templateFile: TEMPLATE_PATH + "/src/interface/model.interface.hbs",
    skip: createSkipFunction(READ_MANY_OPERATION, "model interface"),
  },
  {
    type: "add",
    path: SRC_PATH + "/interface/{{kebabCase name}}.interface.ts",
    templateFile: TEMPLATE_PATH + "/src/interface/model-saved.interface.hbs",
    skip: createSkipFunction([CREATE_ONE_OPERATION, UPDATE_OPERATION, DELETE_OPERATION], "model interface with save operations"),
  },
  {
    type: "add",
    path: SRC_PATH + "/dto/{{kebabCase name}}.dto.ts",
    templateFile: TEMPLATE_PATH + "/src/dto/model-dto.hbs",
    skip: createSkipFunction(READ_MANY_OPERATION, "model DTO"),
  },
  {
    type: "add",
    path: SRC_PATH + "/dto/{{kebabCase name}}.dto.ts",
    templateFile: TEMPLATE_PATH + "/src/dto/model-dto-saved.hbs",
    skip: createSkipFunction([CREATE_ONE_OPERATION, UPDATE_OPERATION, DELETE_OPERATION], "model DTO with save operations"),
  },
  {
    type: "add",
    path: SRC_PATH + "/dto/{{kebabCase name}}-params.dto.ts",
    templateFile: TEMPLATE_PATH + "/src/dto/model-dto-params.hbs",
    skip: createSkipFunction([READ_MANY_OPERATION, DELETE_OPERATION, UPDATE_OPERATION], "model params DTO"),
  },
  {
    type: "add",
    path: SRC_PATH + "/dto/base-{{kebabCase name}}.dto.ts",
    templateFile: TEMPLATE_PATH + "/src/dto/base-dto.dto.hbs",
    skip: createSkipFunction([CREATE_ONE_OPERATION, UPDATE_OPERATION], "base model DTO"),
  },
];

export const MODIFY_MODEL_ACTIONS = [
  {
    type: "modify",
    path: SRC_PATH + "/dto/base-{{kebabCase name}}.dto.ts",
    pattern: BLOCK_METHOD_PATTERN,
    templateFile: TEMPLATE_PATH + "/src/dto/base-dto-method-from-body.hbs",
    skip: createSkipFunction([CREATE_ONE_OPERATION, UPDATE_OPERATION], "fromBody method in base DTO"),
  },
];

export const MODEL_ACTIONS = [
  ...CREATE_MODEL_ACTIONS,
  ...MODIFY_MODEL_ACTIONS
];
