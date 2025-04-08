import { TEST_PATH, TEMPLATE_PATH } from "../../constants.js";

export const TEST_COMMON_ACTIONS = [
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
