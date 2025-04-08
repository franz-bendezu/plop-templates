import { SRC_PATH, TEMPLATE_PATH } from "../../constants.js";

export const CREATE_COMMON_ACTIONS = [
  {
    type: "addMany",
    destination: SRC_PATH + "/common",
    base: TEMPLATE_PATH + "/src/common",
    templateFiles: TEMPLATE_PATH + "/src/common/**/*.ts.hbs",
  },
  {
    type: "addMany",
    destination: SRC_PATH + "/config",
    base: TEMPLATE_PATH + "/src/config",
    templateFiles: TEMPLATE_PATH + "/src/config/**/*.ts.hbs",
  },
];

// No modify actions in this file
export const MODIFY_COMMON_ACTIONS = [];

export const COMMON_ACTIONS = [
  ...CREATE_COMMON_ACTIONS,
  ...MODIFY_COMMON_ACTIONS
];

/**
 * Generates common actions based on the provided data.
 * @param {Object} data - The data to filter the actions.
 * @param {Array} data.operations - The operations to filter the actions.
 * @param {Array} data.skip - The actions to skip.
 * @returns {Array} - The filtered common actions.
 */
export const generateCommonActions = (data) => {
  return COMMON_ACTIONS.filter((action) => {
    if (action.skip) {
      return !action.skip(data);
    }
    return true;
  })
}
