import { MODEL_ACTIONS } from "./actions/model-actions.js";
import {
  CREATE_ONE_OPERATION,
  READ_MANY_OPERATION,
  UPDATE_OPERATION,
  DELETE_OPERATION,
} from "../constants.js";

export const GENERATOR_ONLY_MODEL = {
  description: "Generate only the model component",
  prompts: [
    {
      type: "input",
      name: "moduleName",
      message: "Module name",
    },
    {
      type: "input",
      name: "folder",
      message: "Resource folder",
    },
    {
      type: "input",
      name: "name",
      message: "Resource name",
    },
    {
      type: "list",
      name: "operation",
      message: "Resource operation",
      choices: [
        CREATE_ONE_OPERATION,
        READ_MANY_OPERATION,
        UPDATE_OPERATION,
        DELETE_OPERATION,
      ],
    },
  ],
  actions: MODEL_ACTIONS,
};
