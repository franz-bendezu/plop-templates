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
