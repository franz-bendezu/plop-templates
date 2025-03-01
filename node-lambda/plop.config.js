import { upgradeDevDependencies } from "./config/actions.js";
import { GENERATOR_CONFIG } from "./config/generator/index.js";

// plopfile.js
export default function NodeLambdaConfig(
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setActionType("upgradeDevDependencies", upgradeDevDependencies);

  plop.setGenerator("node-lamda-handler", GENERATOR_CONFIG);
}
