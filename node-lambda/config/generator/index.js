import { GENERATOR_ACTIONS } from "./actions.js";
import {
  CREATE_ONE_OPERATION,
  READ_MANY_OPERATION,
  UPDATE_OPERATION,
  DELETE_OPERATION,
  CREATE_MANY_OPERATION,
  READ_ONE_OPERATION,
} from "../constants.js";

export const GENERATOR_CONFIG = {
  description: "Generate a handler for a new resource",
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
    {
      type: "checkbox",
      name: "components",
      message: "Which components do you want to generate?",
      choices: [
        { name: "Model", value: "model", checked: true },
        { name: "Repository", value: "repository", checked: true },
        { name: "Service", value: "service", checked: true },
        { name: "Controller", value: "controller", checked: true },
        { name: "Handler", value: "handler", checked: true },
        { name: "Common Utilities", value: "common", checked: false },
        { name: "Tests", value: "tests", checked: true },
      ],
      when: (answers) => !answers.generateAll,
    },
    {
      type: "confirm",
      name: "generateAll",
      message: "Generate all components?",
      default: true,
    },
  ],
  actions: GENERATOR_ACTIONS,
};
