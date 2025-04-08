import { REPOSITORY_ACTIONS } from "./repository-actions.js";
import { SERVICE_ACTIONS } from "./service-actions.js";
import { CONTROLLER_ACTIONS } from "./controller-actions.js";
import { MODEL_ACTIONS } from "./model-actions.js";
import { HANDLER_ACTIONS } from "./handler-actions.js";
import { TEST_COMMON_ACTIONS } from "./test-common-actions.js";
import { TEST_MODEL_ACTIONS } from "./test-model-actions.js";
import { TEST_REPOSITORY_ACTIONS } from "./test-repository-actions.js";
import { TEST_SERVICE_ACTIONS } from "./test-service-actions.js";
import { TEST_CONTROLLER_ACTIONS } from "./test-controller-actions.js";
import { TEST_HANDLER_ACTIONS } from "./test-handler-actions.js";
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
    
    // Add model tests if tests component is included
    if (data.components.includes("tests")) {
      actions.push(...TEST_MODEL_ACTIONS);
    }
  }

  // Repository
  if (data.components.includes("repository")) {
    actions.push(...REPOSITORY_ACTIONS);
    
    // Add repository tests if tests component is included
    if (data.components.includes("tests")) {
      actions.push(...TEST_REPOSITORY_ACTIONS);
    }
  }

  // Service
  if (data.components.includes("service")) {
    actions.push(...SERVICE_ACTIONS);
    
    // Add service tests if tests component is included
    if (data.components.includes("tests")) {
      actions.push(...TEST_SERVICE_ACTIONS);
    }
  }

  // Controller
  if (data.components.includes("controller")) {
    actions.push(...CONTROLLER_ACTIONS);
    
    // Add controller tests if tests component is included
    if (data.components.includes("tests")) {
      actions.push(...TEST_CONTROLLER_ACTIONS);
    }
  }

  // Handler
  if (data.components.includes("handler")) {
    actions.push(...HANDLER_ACTIONS);
    
    // Add handler tests if tests component is included
    if (data.components.includes("tests")) {
      actions.push(...TEST_HANDLER_ACTIONS);
    }
  }

  // Common test files
  if (data.components.includes("tests")) {
    actions.push(...TEST_COMMON_ACTIONS);
  }

  // Add dependency upgrade action
  actions.push({
    type: "upgradeDevDependencies",
  });

  return actions;
};
