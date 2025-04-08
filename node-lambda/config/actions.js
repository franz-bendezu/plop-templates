import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { dependencies, devDependencies, dependenciesToRemove } from "./dependencies.js";

/**
 * Initialize an npm project if package.json doesn't exist
 */
function initializeNpmProject(projectPath) {
  const packageJsonPath = path.join(projectPath, "package.json");
  
  if (!fs.existsSync(packageJsonPath)) {
    console.log("No package.json found. Initializing npm project...");
    execSync("npm init -y", { 
      stdio: "inherit", 
      cwd: projectPath 
    });
    return true;
  }
  return false;
}

/**
 * Install dependencies with a single npm command
 */
function installDependencies(dependencies, projectPath, isDev = false) {
  if (!Object.keys(dependencies).length) return;
  
  const installType = isDev ? "--save-dev" : "--save";
  const depsString = Object.entries(dependencies)
    .map(([dep, version]) => version ? `${dep}@${version}` : dep)
    .join(" ");
  
  execSync(`npm install ${installType} ${depsString}`, { 
    stdio: "inherit", 
    cwd: projectPath 
  });
}

/**
 * Upgrades the development dependencies of a Node.js project.
 *
 * @param {Object} answers - The answers object containing user inputs.
 * @param {string} answers.folder - The folder path where the project is located. Defaults to the current working directory if not provided.
 * @param {Object} config - The configuration object (not used in this function).
 * @param {Object} plop - The plop object (not used in this function).
 * @returns {string} A message indicating that the NPM project was initialized (if needed) and dependencies were installed/upgraded.
 *
 * @throws {Error} If there is an issue uninstalling old dependencies or installing new ones.
 */
export function upgradeDevDependencies(answers, config, plop) {
  const projectPath = answers.folder || process.cwd(); // Use the provided path or the current working directory
  
  // Initialize npm project if needed
  initializeNpmProject(projectPath);

  // Remove old versions if they exist
  try {
    execSync(`npm uninstall ${dependenciesToRemove.join(" ")}`, {
      stdio: "inherit",
      cwd: projectPath,
    });
  } catch (error) {
    console.log("No old dependencies to uninstall, continuing...");
  }

  // Install dependencies
  installDependencies(devDependencies, projectPath, true);
  installDependencies(dependencies, projectPath, false);

  return "NPM project initialized (if needed) and dependencies installed/upgraded";
}
