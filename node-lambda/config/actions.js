import { execSync } from "child_process";
import fs from "fs";
import path from "path";
/**
 * Initialize an npm project if package.json doesn't exist
 */
function initializeNpmProject(projectPath) {
  const packageJsonPath = path.join(projectPath, "package.json");
  
  if (!fs.existsSync(packageJsonPath)) {
    console.log("No package.json found. Initializing npm project...");
    try {
      // Use { shell: true } to ensure the command runs correctly across platforms
      execSync("npm init -y", { 
        stdio: "inherit", 
        cwd: projectPath,
        shell: true 
      });
      return true;
    } catch (error) {
      console.error(`Error initializing npm project: ${error.message}`);
      throw new Error(`Failed to initialize npm project: ${error.message}`);
    }
  }
  return false;
}

/**
 * Install dependencies with a single npm command
 */
/**
 * Installs the specified npm dependencies in the given project directory.
 *
 * @param {Object} dependencies - An object where keys are dependency names and values are their versions.
 *                                If the version is an empty string or undefined, the latest version will be installed.
 * @param {string} projectPath - The file path to the project where dependencies should be installed.
 * @param {boolean} [isDev=false] - Whether to install the dependencies as development dependencies (--save-dev).
 *                                  Defaults to false, meaning dependencies will be installed as regular (--save).
 * @throws {Error} Throws an error if the installation process fails.
 */
function installDependencies(dependencies, projectPath, isDev = false) {
  if (!Object.keys(dependencies).length) return;
  
  const installType = isDev ? "--save-dev" : "--save";
  const depsString = Object.entries(dependencies)
    .map(([dep, version]) => version ? `${dep}@${version}` : dep)
    .join(" ");
  
  try {
    execSync(`npm install ${installType} ${depsString}`, { 
      stdio: "inherit", 
      cwd: projectPath,
      shell: true 
    });
  } catch (error) {
    console.error(`Error installing dependencies: ${error.message}`);
    throw new Error(`Failed to install dependencies: ${error.message}`);
  }
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
export function manageDependencies(answers, config, plop) {
  const projectPath = answers.folder || process.cwd(); // Use the provided path or the current working directory
  const dependencies = config.dependencies || {};
  const devDependencies = config.devDependencies || {};
  const dependenciesToRemove = config.dependenciesToRemove || [];
  // Initialize npm project if needed
  initializeNpmProject(projectPath);

  // Remove old versions if they exist
  try {
    execSync(`npm uninstall ${dependenciesToRemove.join(" ")}`, {
      stdio: "inherit",
      cwd: projectPath,
      shell: true
    });
  } catch (error) {
    console.log("No old dependencies to uninstall, continuing...");
  }

  // Install dependencies
  try {
    installDependencies(devDependencies, projectPath, true);
    installDependencies(dependencies, projectPath, false);
  } catch (error) {
    console.error(`Failed to install dependencies: ${error.message}`);
    throw error; // Re-throw to ensure the error is reported up
  }

  return "NPM project initialized (if needed) and dependencies installed/upgraded";
}
