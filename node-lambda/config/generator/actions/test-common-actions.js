import { TEST_PATH, TEMPLATE_PATH } from "../../constants.js";

export const CREATE_TEST_COMMON_ACTIONS = [
  {
    type: "addMany",
    destination: TEST_PATH + "/common",
    base: TEMPLATE_PATH + "/test/common",
    templateFiles: TEMPLATE_PATH + "/test/common/**/*.ts.hbs",
  },
  {
    type: "addMany",
    destination: TEST_PATH + "/config",
    base: TEMPLATE_PATH + "/test/config",
    templateFiles: TEMPLATE_PATH + "/test/config/**/*.ts.hbs",
  },
];

// No modify actions in this file
export const MODIFY_TEST_COMMON_ACTIONS = [];

export const TEST_COMMON_ACTIONS = [
  ...CREATE_TEST_COMMON_ACTIONS,
  ...MODIFY_TEST_COMMON_ACTIONS
];

/**
 * Generates test common actions based on the provided data.
 * @param {Object} data - The data to filter the actions.
 * @param {Array} data.operations - The operations to filter the actions.
 * @param {Array} data.skip - The actions to skip.
 * @returns {Array} - The filtered test common actions.
 */
export const generateTestCommonActions = (data) => {
  return TEST_COMMON_ACTIONS.filter((action) => {
    if (action.skip) {
      return !action.skip(data);
    }
    return true;
  });
};
