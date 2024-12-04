import { GENERATOR_ACTIONS } from "./actions.js";

export const GENERATOR_CONFIG = {
  description: "Generate a handler for a new resource",
  prompts: [
    {
      type: "input",
      name: "moduleName",
      message: "Resource path",
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
        CREATE_OPERATION,
        READ_OPERATION,
        UPDATE_OPERATION,
        DELETE_OPERATION,
      ],
    },
  ],
  actions: GENERATOR_ACTIONS,
};
