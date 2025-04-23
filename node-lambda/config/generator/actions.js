import { generateRepositoryActions } from "./actions/repository-actions.js";
import { generateServiceActions } from "./actions/service-actions.js";
import { generateControllerActions } from "./actions/controller-actions.js";
import { generateModelActions } from "./actions/model-actions.js";
import { generateHandlerActions } from "./actions/handler-actions.js";
import { generateTestCommonActions } from "./actions/test-common-actions.js";
import { generateTestModelActions } from "./actions/test-model-actions.js";
import { generateTestRepositoryActions } from "./actions/test-repository-actions.js";
import { generateTestServiceActions } from "./actions/test-service-actions.js";
import { generateTestControllerActions } from "./actions/test-controller-actions.js";
import { generateTestHandlerActions } from "./actions/test-handler-actions.js";
import { generateCommonActions } from "./actions/common-actions.js";
import { SRC_PATH, TEMPLATE_PATH } from "../constants.js";

/**
 * Generates plop actions based on selected components
 * 
 * @param {Object} data - The user input data
 * @param {string[]} data.components - List of components to generate
 * @param {boolean} data.generateAll - Flag to generate all components
 * @param {string} data.folder - Folder path where files will be generated
 * @param {string} data.dbDriver - Database driver to use (postgres or oracle)
 * @returns {Array} Array of plop actions to be executed
 */
export const generateMainActions = function (data) {
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
    actions.push(...generateCommonActions(data));

    // Add common tests if tests component is included
    if (data.components.includes("tests")) {
      actions.push(...generateTestCommonActions(data));
    }
  }

  // Models
  if (data.components.includes("model")) {
    actions.push(...generateModelActions(data));
    
    // Add model tests if tests component is included
    if (data.components.includes("tests")) {
      actions.push(...generateTestModelActions(data));
    }
  }
  
  // Add database config based on selected driver
  if (data.dbDriver) {
    actions.push({
      type: "add",
      path: SRC_PATH + "/config/{{dbDriver}}.config.ts",
      templateFile: TEMPLATE_PATH + "/src/config/{{dbDriver}}.config.hbs",
    });
  }

  // Repository
  if (data.components.includes("repository")) {
    actions.push(...generateRepositoryActions(data));
    
    // Add repository tests if tests component is included
    if (data.components.includes("tests")) {
      actions.push(...generateTestRepositoryActions(data));
    }
  }

  // Service
  if (data.components.includes("service")) {
    actions.push(...generateServiceActions(data));
    
    // Add service tests if tests component is included
    if (data.components.includes("tests")) {
      actions.push(...generateTestServiceActions(data));
    }
  }

  // Controller
  if (data.components.includes("controller")) {
    actions.push(...generateControllerActions(data));
    
    // Add controller tests if tests component is included
    if (data.components.includes("tests")) {
      actions.push(...generateTestControllerActions(data));
    }
  }

  // Handler
  if (data.components.includes("handler")) {
    actions.push(...generateHandlerActions(data));
    
    // Add handler tests if tests component is included
    if (data.components.includes("tests")) {
      actions.push(...generateTestHandlerActions(data));
    }
  }
  // Add dependency upgrade action
  actions.push({
    type: "upgradeDevDependencies",
  });

  return actions;
};
