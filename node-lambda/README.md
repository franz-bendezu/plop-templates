# Node Lambda Code Generator

A flexible code generator for AWS Lambda functions with support for component-based generation, creating clean, testable, and modular code.

## Features

- Generate complete Lambda handlers with all components
- Generate individual components (Model, Repository, Service, Controller)
- Support for different operations (create, read, update, delete)
- Comprehensive test suite generation
- Clean architecture design pattern

## Installation

Add the following to your `plopfile.js`:

```javascript
import nodeLambdaConfig from './plop-templates/node-lambda/plop.config.js';

export default function(plop) {
  nodeLambdaConfig(plop);
  // Your other generators
}
```

## Usage

### Generate Complete Lambda

Generate a complete Lambda handler with all components:

```sh
plop node-lambda-handler
```

Or with command line arguments:

```sh
plop node-lambda-handler -- --name product --moduleName product --folder product-api --operation read-many
```

### Generate Individual Components

You can also generate specific components if needed:

#### Generate Only Repository

```sh
plop node-lambda-repository -- --name product --moduleName product --folder product-api --operation read-many
```

#### Generate Only Service

```sh
plop node-lambda-service -- --name product --moduleName product --folder product-api --operation read-many
```

#### Generate Only Controller

```sh
plop node-lambda-controller -- --name product --moduleName product --folder product-api --operation read-many
```

#### Generate Only Model

```sh
plop node-lambda-model -- --name product --moduleName product --folder product-api --operation read-many
```

## Operation Types

The generator supports the following operations:

- `create-one`: Generate components for creating a single resource
- `create-many`: Generate components for creating multiple resources
- `read-one`: Generate components for reading a single resource by ID
- `read-many`: Generate components for reading multiple resources with filters
- `update`: Generate components for updating a resource
- `delete`: Generate components for deleting a resource

## Component Selection

When generating a complete Lambda handler, you can choose which components to include:

- Model: Data models, interfaces, and DTOs
- Repository: Database access layer
- Service: Business logic layer
- Controller: Request handling and response formatting
- Handler: AWS Lambda entry point
- Common Utilities: Error handling, logging, and configuration
- Tests: Comprehensive test suite for all components

## Generated Structure

The generator creates a clean architecture with the following structure:

```
project-api/
├── src/
│   └── module-name/
│       ├── common/
│       │   ├── error/
│       │   ├── formatter/
│       │   ├── logger/
│       │   ├── response/
│       │   └── schema/
│       ├── config/
│       ├── controller/
│       ├── dto/
│       ├── interface/
│       ├── model/
│       ├── repository/
│       │   └── query/
│       ├── service/
│       └── handler.ts
└── test/
    └── module-name/
        ├── common/
        ├── config/
        ├── controller/
        ├── dto/
        ├── model/
        ├── repository/
        ├── service/
        ├── handler.test.ts
        └── handler-invoker.ts
```

## Dependencies

The generator installs the following dependencies:

- `@aws-sdk/client-secrets-manager`: AWS Secrets Manager client
- `@types/aws-lambda`: TypeScript types for AWS Lambda
- `aws-sdk-client-mock`: Mock for AWS SDK clients
- `jest`: Testing framework
- `joi` and `@joi/date`: Schema validation
- `pino`: Logging library
- `serverless` and `serverless-offline`: Serverless framework and local development

## Examples

### Creating a User API with CRUD Operations

1. Generate the base structure with create operation:
   ```sh
   plop node-lambda-handler -- --name user --moduleName user --folder user-api --operation create-one
   ```

2. Add read functionality:
   ```sh
   plop node-lambda-repository -- --name user --moduleName user --folder user-api --operation read-many
   plop node-lambda-service -- --name user --moduleName user --folder user-api --operation read-many
   plop node-lambda-controller -- --name user --moduleName user --folder user-api --operation read-many
   ```

3. Add update and delete functionality as needed.