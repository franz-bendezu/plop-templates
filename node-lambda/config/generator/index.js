import { GENERATOR_ACTIONS } from "./actions";

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
      choices: ["create", "read", "update", "delete"],
    },
  ],
  actions: GENERATOR_ACTIONS,
};
