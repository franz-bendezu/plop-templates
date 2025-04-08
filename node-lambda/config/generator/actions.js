import { REPOSITORY_ACTIONS } from "./repository-actions.js";
import { SERVICE_ACTIONS } from "./service-actions.js";
import { CONTROLLER_ACTIONS } from "./controller-actions.js";
import { MODEL_ACTIONS } from "./model-actions.js";
import { HANDLER_ACTIONS } from "./handler-actions.js";
import { TEST_ACTIONS } from "./test-actions.js";
import { SRC_PATH, TEMPLATE_PATH } from "../constants.js";

export const GENERATOR_ACTIONS = function (data) {
  // Set up components based on selection
  data.components = data.generateAll
    ? [
        "model",
        "repository",
        "service",
        "controller",
        "handler",
        "common",
        "tests",
      ]
    : data.components;

  const actions = [];

  // Common files needed for all components
  if (data.components.includes("common")) {
    actions.push(
      ...[
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
      ]
    );
  }

  // Models
  if (data.components.includes("model")) {
    actions.push(...MODEL_ACTIONS);
  }

  // Repository
  if (data.components.includes("repository")) {
    actions.push(...REPOSITORY_ACTIONS);
  }

  // Service
  if (data.components.includes("service")) {
    actions.push(...SERVICE_ACTIONS);
  }

  // Controller
  if (data.components.includes("controller")) {
    actions.push(...CONTROLLER_ACTIONS);
  }

  // Handler
  if (data.components.includes("handler")) {
    actions.push(...HANDLER_ACTIONS);
  }

  // Tests
  if (data.components.includes("tests")) {
    actions.push(...TEST_ACTIONS);
  }

  // Add dependency upgrade action
  actions.push({
    type: "upgradeDevDependencies",
  });

  return actions;
};
