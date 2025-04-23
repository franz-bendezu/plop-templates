import { generateMainActions } from "./actions.js";
import {
  CREATE_ONE_OPERATION,
  READ_MANY_OPERATION,
  UPDATE_OPERATION,
  DELETE_OPERATION,
  CREATE_MANY_OPERATION,
  READ_ONE_OPERATION,
} from "../constants.js";

export const GENERATOR_CONFIG = {
  description: "Generate lambda handler with all necessary components",
  prompts: [
    {
      type: "input",
      name: "folder",
      message: "Resource folder",
      default: ".",
    },
    {
      type: "input",
      name: "name",
      message: "Resource name",
    },
    {
      type: "input",
      name: "moduleName",
      message: "Module name",
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
      type: "list",
      name: "dbDriver",
      message: "Database driver",
      choices: [
        { name: "PostgreSQL", value: "postgres" },
        { name: "Oracle", value: "oracle" },
        { name: "None", value: null },
      ],
      default: "postgres",
    },
    {
      type: "input",
      name: "nameSecretDb",
      message: "Environment variable name for DB Secret",
      default: "NAME_SECRET_DB",
      when: (answers) => answers.dbDriver !== null,
    },
    {
      type: "confirm",
      name: "generateAll",
      message: "Generate all components?",
      default: true,
    },
    {
      when: (answers) => !answers.generateAll,
      type: "checkbox",
      name: "components",
      message: "Select components to generate",
      choices: [
        { name: "Model", value: "model" },
        { name: "Repository", value: "repository" },
        { name: "Service", value: "service" },
        { name: "Controller", value: "controller" },
        { name: "Handler", value: "handler" },
        { name: "Common files", value: "common" },
        { name: "Tests", value: "tests" },
      ],
    },
  ],
  actions: generateMainActions,
};
