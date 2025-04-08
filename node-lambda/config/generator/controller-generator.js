import { generateControllerActions } from "./actions/controller-actions.js";
import {
  CREATE_ONE_OPERATION,
  READ_MANY_OPERATION,
  READ_ONE_OPERATION,
  UPDATE_OPERATION,
  DELETE_OPERATION,
  CREATE_MANY_OPERATION,
} from "../constants.js";

export const GENERATOR_ONLY_CONTROLLER = {
  description: "Generate only the controller component",
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
        CREATE_MANY_OPERATION,
        READ_ONE_OPERATION,
        READ_MANY_OPERATION,
        UPDATE_OPERATION,
        DELETE_OPERATION,
      ],
    },
  ],
  actions: (data) => {
    return generateControllerActions(data);
  },
};
