import { SRC_PATH, TEMPLATE_PATH } from "../constants";

export const COMMON_ACTIONS = [
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
