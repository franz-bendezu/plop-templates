import {
  CREATE_ONE_OPERATION,
  UPDATE_OPERATION,
  TEST_PATH,
  TEMPLATE_PATH,
} from "../constants.js";
import { createSkipFunction } from "./utils.js";

export const TEST_MODEL_ACTIONS = [
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
];
