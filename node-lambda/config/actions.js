import { execSync } from "child_process";

export function upgradeDevDependencies(answers, config, plop) {
  const projectPath = answers.folder || process.cwd(); // Use the provided path or the current working directory

  // Remove old versions
  execSync("npm uninstall serverless-offline serverless", {
    stdio: "inherit",
    cwd: projectPath,
  });

  // Install specific versions
  const devDeps = {
    serverless: "^3.39.0",
    "serverless-offline": "^13.8.2",
    "@aws-sdk/client-secrets-manager": "^3.668.0",
    "@types/aws-lambda": "^8.10.145",
    "aws-sdk-client-mock": "^4.0.2",
    jest: "^29.7.0",
  };
  execSync(
    `npm install --save-dev ${Object.keys(devDeps)
      .map((dep) => `${dep}@${devDeps[dep]}`)
      .join(" ")}`,
    { stdio: "inherit", cwd: projectPath }
  );
  const deps = {
    "@joi/date": "^2.1.1",
    joi: "^17.13.3",
  };

  execSync(
    `npm install --save ${Object.keys(deps)
      .map((dep) => `${dep}@${deps[dep]}`)
      .join(" ")}`,
    { stdio: "inherit", cwd: projectPath } 
  );

  // Install pino for logging
  execSync("npm install --save pino", { stdio: "inherit", cwd: projectPath });
  execSync("npm install --save-dev @types/pino", { stdio: "inherit", cwd: projectPath });

  return "Dev dependencies and dependencies upgraded";
}
