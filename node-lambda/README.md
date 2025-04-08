# Node Lambda Templates

This package provides a set of code generators for creating Lambda functions with a clean architecture pattern.

## Installation

```bash
npm install -g plop
```

## Usage

To start the generator:

```bash
plop
```

## Available Generators

The system offers the following generators to help you build your Lambda functions:

### 1. Complete Lambda Handler Generator

Generates a complete Lambda handler with all necessary components.

```bash
plop node-lambda-handler
```

This generator will prompt you for:
- Module name
- Resource folder
- Resource name
- Operation type (Create, Read, Update, Delete)
- DB Secret environment variable name
- Option to generate all components or select specific ones

### 2. Individual Component Generators

If you only need specific components, you can use these dedicated generators:

#### Handler Generator

Generates only the Lambda handler component:

```bash
plop node-lambda-handler
```

#### Controller Generator

Generates only the controller component:

```bash
plop node-lambda-controller
```

#### Service Generator

Generates only the service component:

```bash
plop node-lambda-service
```

#### Repository Generator

Generates only the repository component:

```bash
plop node-lambda-repository
```

#### Model Generator

Generates only the model component:

```bash
plop node-lambda-model
```

### 3. Add Method to Existing Component

You can add new methods to existing components:

```bash
plop add-method
```

This generator will prompt you for:
- Resource name
- Component type (controller, service, repository)
- Method type to add (Create, Read, Update, Delete)

### 4. Available Operations

The system supports the following operations across all generators:

- `CREATE_ONE`: Create a single resource
- `CREATE_MANY`: Create multiple resources
- `READ_ONE`: Get a single resource by ID
- `READ_MANY`: List resources with pagination/filtering
- `UPDATE`: Update a resource
- `DELETE`: Delete a resource

## Example Usage

### Generate a complete CRUD handler:

```bash
plop node-lambda
```

Then follow the prompts:
```
? Module name users
? Resource folder src/users
? Resource name user
? Resource operation Create One
? Environment variable name for DB Secret USERS_DB_SECRET
? Generate all components? Yes
```

### Generate only a repository component:

```bash
plop node-lambda-repository
```

Then follow the prompts:
```
? Module name users
? Resource folder src/users
? Resource name user
? Resource operation Read Many
```

### Add a delete method to an existing controller:

```bash
plop add-method
```

Then follow the prompts:
```
? Resource name user
? Component type controller
? Method to add Delete
```

## Inline Command Examples

You can also run generators with inline arguments instead of interactive prompts:

### Complete Lambda Handler

```bash
plop node-lambda -- --moduleName users --folder src/users --name user --operation "Create One" --nameSecretDb USERS_DB_SECRET --generateAll true
```

### Individual Components

Repository:
```bash
plop node-lambda-repository -- --moduleName users --folder src/users --name user --operation "Read Many"
```

Service:
```bash
plop node-lambda-service -- --moduleName users --folder src/users --name user --operation "Create One"
```

Controller:
```bash
plop node-lambda-controller -- --moduleName users --folder src/users --name user --operation "Update"
```

Model:
```bash
plop node-lambda-model -- --moduleName users --folder src/users --name user --operation "Delete"
```

Handler:
```bash
plop node-lambda-handler -- --moduleName users --folder src/users --name user --operation "Read One" --nameSecretDb USERS_DB_SECRET
```

### Add Method

```bash
plop add-method -- --name user --componentType controller --methodType "Delete"
```

### Upgrade Dependencies

```bash
plop upgrade-dependencies -- --folder ./my-project
```

## Project Structure

The generated code follows a clean architecture pattern with the following components:

- **Handler**: Entry point for the Lambda function
- **Controller**: Handles request/response formatting
- **Service**: Contains business logic
- **Repository**: Data access layer
- **Model**: Data model definitions
