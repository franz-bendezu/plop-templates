import { generateRepositoryActions } from "./actions/repository-actions.js";
import {
  CREATE_ONE_OPERATION,
  READ_MANY_OPERATION,
  READ_ONE_OPERATION,
  UPDATE_OPERATION,
  DELETE_OPERATION,
  CREATE_MANY_OPERATION,
} from "../constants.js";

export const GENERATOR_ONLY_REPOSITORY = {
  description: "Generate only the repository component",
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
  ],
  actions: (data) => {
    return generateRepositoryActions(data);
  },
};
