import { getMethodActions } from "./method-actions.js";
import {
  CREATE_ONE_OPERATION,
  READ_MANY_OPERATION,
  READ_ONE_OPERATION,
  UPDATE_OPERATION,
  DELETE_OPERATION,
  CREATE_MANY_OPERATION,
} from "../constants.js";

export const GENERATOR_ADD_METHOD = {
  description: "Add a method to an existing component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Resource name",
    },
    {
      type: "list",
      name: "componentType",
      message: "Component type",
      choices: ["controller", "service", "repository"],
    },
    {
      type: "list",
      name: "methodType",
      message: "Method to add",
      choices: [
        CREATE_ONE_OPERATION,
        READ_MANY_OPERATION,
        READ_ONE_OPERATION,
        UPDATE_OPERATION,
        DELETE_OPERATION,
        CREATE_MANY_OPERATION,
      ],
    },
  ],
  actions: (data) => {
    return getMethodActions(data.componentType, data.methodType);
  },
};
