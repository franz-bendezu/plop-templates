import { upgradeDevDependencies } from "./config/actions.js";
import { GENERATOR_CONFIG } from "./config/generator/index.js";
import { GENERATOR_ONLY_REPOSITORY } from "./config/generator/repository-generator.js";
import { GENERATOR_ONLY_SERVICE } from "./config/generator/service-generator.js";
import { GENERATOR_ONLY_CONTROLLER } from "./config/generator/controller-generator.js";
import { GENERATOR_ONLY_MODEL } from "./config/generator/model-generator.js";
import { GENERATOR_ADD_METHOD } from "./config/generator/method-generator.js";

// plopfile.js
export default function NodeLambdaConfig(
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setActionType("upgradeDevDependencies", upgradeDevDependencies);

  // Main generator
  plop.setGenerator("node-lambda-handler", GENERATOR_CONFIG);
  
  // Component generators
  plop.setGenerator("node-lambda-repository", GENERATOR_ONLY_REPOSITORY);
  plop.setGenerator("node-lambda-service", GENERATOR_ONLY_SERVICE);
  plop.setGenerator("node-lambda-controller", GENERATOR_ONLY_CONTROLLER);
  plop.setGenerator("node-lambda-model", GENERATOR_ONLY_MODEL);
  
  // Add method to existing component
  plop.setGenerator("add-method", GENERATOR_ADD_METHOD);
}
