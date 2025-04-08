import { 
  CREATE_ONE_OPERATION, 
  READ_MANY_OPERATION,
  READ_ONE_OPERATION,
  UPDATE_OPERATION,
  DELETE_OPERATION,
  CREATE_MANY_OPERATION,
  SRC_PATH,
  TEMPLATE_PATH,
  BLOCK_METHOD_PATTERN 
} from "../constants.js";

export const getControllerMethodActions = (methodType) => {
  const actions = [];
  
  // Add interface method
  if (methodType === READ_MANY_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/controller/{{kebabCase name}}.controller.interface.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/controller/controller-interface-find-by-params.hbs",
    });
  } else if (methodType === CREATE_ONE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/controller/{{kebabCase name}}.controller.interface.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/controller/controller-method-create-interface.hbs",
    });
  } else if (methodType === UPDATE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/controller/{{kebabCase name}}.controller.interface.ts", 
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/controller/controller-method-update-interface.hbs",
    });
  } else if (methodType === DELETE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/controller/{{kebabCase name}}.controller.interface.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/controller/controller-method-delete-interface.hbs",
    });
  } else if (methodType === READ_ONE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/controller/{{kebabCase name}}.controller.interface.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/controller/controller-method-find-interface.hbs",
    });
  } else if (methodType === CREATE_MANY_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/controller/{{kebabCase name}}.controller.interface.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/controller/controller-method-create-list-interface.hbs",
    });
  }
  
  // Add implementation
  if (methodType === READ_MANY_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/controller/{{kebabCase name}}.controller.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/controller/controller-find-by-params.hbs",
    });
  } else if (methodType === CREATE_ONE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/controller/{{kebabCase name}}.controller.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/controller/controller-method-create.hbs",
    });
  } else if (methodType === UPDATE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/controller/{{kebabCase name}}.controller.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/controller/controller-method-update.hbs",
    });
  } else if (methodType === DELETE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/controller/{{kebabCase name}}.controller.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/controller/controller-method-delete.hbs",
    });
  } else if (methodType === READ_ONE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/controller/{{kebabCase name}}.controller.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/controller/controller-method-find.hbs",
    });
  } else if (methodType === CREATE_MANY_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/controller/{{kebabCase name}}.controller.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/controller/controller-method-create-list.hbs",
    });
  }
  
  return actions;
};

export const getServiceMethodActions = (methodType) => {
  const actions = [];
  
  // Add interface method
  if (methodType === READ_MANY_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/service/{{kebabCase name}}.service.interface.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/service/service-method-find-by-params-interface.hbs",
    });
  } else if (methodType === CREATE_ONE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/service/{{kebabCase name}}.service.interface.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/service/service-method-create-interface.hbs",
    });
  } else if (methodType === UPDATE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/service/{{kebabCase name}}.service.interface.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/service/service-method-update-interface.hbs",
    });
  } else if (methodType === DELETE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/service/{{kebabCase name}}.service.interface.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/service/service-method-delete-interface.hbs",
    });
  } else if (methodType === READ_ONE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/service/{{kebabCase name}}.service.interface.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/service/service-method-find-interface.hbs",
    });
  } else if (methodType === CREATE_MANY_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/service/{{kebabCase name}}.service.interface.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/service/service-method-create-list-interface.hbs",
    });
  }
  
  // Add implementation
  if (methodType === READ_MANY_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/service/{{kebabCase name}}.service.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/service/service-method-find-by-params.hbs",
    });
  } else if (methodType === CREATE_ONE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/service/{{kebabCase name}}.service.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/service/service-method-create.hbs",
    });
  } else if (methodType === UPDATE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/service/{{kebabCase name}}.service.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/service/service-method-update.hbs",
    });
  } else if (methodType === DELETE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/service/{{kebabCase name}}.service.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/service/service-method-delete.hbs",
    });
  } else if (methodType === READ_ONE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/service/{{kebabCase name}}.service.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/service/service-method-find.hbs",
    });
  } else if (methodType === CREATE_MANY_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/service/{{kebabCase name}}.service.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/service/service-method-create-list.hbs",
    });
  }
  
  return actions;
};

export const getRepositoryMethodActions = (methodType) => {
  const actions = [];
  
  // Add interface method
  if (methodType === READ_MANY_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/repository/{{kebabCase name}}.repository.interface.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/repository/repository-method-find-by-params-interface.hbs",
    });
  } else if (methodType === CREATE_ONE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/repository/{{kebabCase name}}.repository.interface.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/repository/repository-method-create-interface.hbs",
    });
  } else if (methodType === UPDATE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/repository/{{kebabCase name}}.repository.interface.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/repository/repository-method-update-interface.hbs",
    });
  } else if (methodType === DELETE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/repository/{{kebabCase name}}.repository.interface.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/repository/repository-method-delete-interface.hbs",
    });
  } else if (methodType === READ_ONE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/repository/{{kebabCase name}}.repository.interface.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/repository/repository-method-find-interface.hbs",
    });
  } else if (methodType === CREATE_MANY_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/repository/{{kebabCase name}}.repository.interface.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/repository/repository-method-create-list-interface.hbs",
    });
  }
  
  // Add implementation
  if (methodType === READ_MANY_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/repository/{{kebabCase name}}.repository.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/repository/repository-method-find-by-params.hbs",
    });
    
    // Add query file if it doesn't exist
    actions.push({
      type: "add",
      path: SRC_PATH + "/repository/query/{{kebabCase name}}.query.ts",
      templateFile: TEMPLATE_PATH + "/src/repository/query/model-query-find-by-params.hbs",
      skipIfExists: true
    });
  } else if (methodType === CREATE_ONE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/repository/{{kebabCase name}}.repository.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/repository/repository-method-create.hbs",
    });
    
    // Add query file if it doesn't exist
    actions.push({
      type: "add",
      path: SRC_PATH + "/repository/query/{{kebabCase name}}.query.ts",
      templateFile: TEMPLATE_PATH + "/src/repository/query/model-query-create.hbs",
      skipIfExists: true
    });
  } else if (methodType === UPDATE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/repository/{{kebabCase name}}.repository.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/repository/repository-method-update.hbs",
    });
    
    // Add query file if it doesn't exist
    actions.push({
      type: "add",
      path: SRC_PATH + "/repository/query/{{kebabCase name}}.query.ts",
      templateFile: TEMPLATE_PATH + "/src/repository/query/model-query-update.hbs",
      skipIfExists: true
    });
  } else if (methodType === DELETE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/repository/{{kebabCase name}}.repository.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/repository/repository-method-delete.hbs",
    });
    
    // Add query file if it doesn't exist
    actions.push({
      type: "add",
      path: SRC_PATH + "/repository/query/{{kebabCase name}}.query.ts",
      templateFile: TEMPLATE_PATH + "/src/repository/query/model-query-delete.hbs",
      skipIfExists: true
    });
  } else if (methodType === READ_ONE_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/repository/{{kebabCase name}}.repository.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/repository/repository-method-find.hbs",
    });
    
    // Add query file if it doesn't exist
    actions.push({
      type: "add",
      path: SRC_PATH + "/repository/query/{{kebabCase name}}.query.ts",
      templateFile: TEMPLATE_PATH + "/src/repository/query/model-query-find-by-id.hbs",
      skipIfExists: true
    });
  } else if (methodType === CREATE_MANY_OPERATION) {
    actions.push({
      type: "modify",
      path: SRC_PATH + "/repository/{{kebabCase name}}.repository.ts",
      pattern: BLOCK_METHOD_PATTERN,
      templateFile: TEMPLATE_PATH + "/src/repository/repository-method-create-list.hbs",
    });
    
    // Add query file if it doesn't exist
    actions.push({
      type: "add",
      path: SRC_PATH + "/repository/query/{{kebabCase name}}.query.ts",
      templateFile: TEMPLATE_PATH + "/src/repository/query/model-query-create-batch.hbs",
      skipIfExists: true
    });
  }
  
  return actions;
};

export const getMethodActions = (componentType, methodType) => {
  if (componentType === 'controller') {
    return getControllerMethodActions(methodType);
  } else if (componentType === 'service') {
    return getServiceMethodActions(methodType);
  } else if (componentType === 'repository') {
    return getRepositoryMethodActions(methodType);
  }
  return [];
};
