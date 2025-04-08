import { GENERATOR_ACTIONS } from "./actions.js";
import {
  CREATE_ONE_OPERATION,
  READ_MANY_OPERATION,
  UPDATE_OPERATION,
  DELETE_OPERATION,
} from "../constants.js";

export const GENERATOR_CONFIG = {
  description: "Generate a handler with its support files",
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
      type: "input",
      name: "nameSecretDb",
      message: "Environment variable name for DB Secret",
      default: "NAME_SECRET_DB",
    },
    {
      type: "confirm",
      name: "generateAll",
      message: "Generate all components?",
      default: true,
    },
    {
      type: "checkbox",
      name: "components",
      message: "Select components to generate",
      choices: [
        { name: "Model Layer", value: "model" },
        { name: "Repository Layer", value: "repository" },
        { name: "Service Layer", value: "service" },
        { name: "Controller Layer", value: "controller" },
        { name: "Handler Layer", value: "handler" },
        { name: "Common Utilities", value: "common" },
        { name: "Tests", value: "tests" },
      ],
      default: ["model", "repository", "service", "controller", "handler", "common", "tests"],
      when: (answers) => !answers.generateAll,
    },
  ],
  actions: GENERATOR_ACTIONS,
};
