import { execSync } from "child_process";

export function upgradeDevDependencies(answers, config, plop) {
  const projectPath = answers.folder || process.cwd(); // Use the provided path or the current working directory

  // Remove old versions
  execSync("npm uninstall serverless-offline serverless", {
    stdio: "inherit",
    cwd: projectPath,
  });

  // Install specific versions
  execSync(
    "npm install --save-dev serverless-offline@^13.8.2 ^serverless@^3.39.0",
    { stdio: "inherit", cwd: projectPath }
  );

  return "DevDependencies upgraded to specific versions";
}
