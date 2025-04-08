import { MODIFY_CONTROLLER_ACTIONS } from "./actions/controller-actions.js";
import { MODIFY_REPOSITORY_ACTIONS } from "./actions/repository-actions.js";
import { MODIFY_SERVICE_ACTIONS } from "./actions/service-actions.js";
import { MODIFY_TEST_CONTROLLER_ACTIONS } from "./actions/test-controller-actions.js";
import { MODIFY_TEST_REPOSITORY_ACTIONS } from "./actions/test-repository-actions.js";
import { MODIFY_TEST_SERVICE_ACTIONS } from "./actions/test-service-actions.js";

export const getControllerMethodActions = (operation) => {
  const controllerActions = MODIFY_CONTROLLER_ACTIONS.filter(action => {
    if (action.skip) {
      return !action.skip({
         operation: operation,
      });
    }
    return true;
  });
  
  const controllerTestActions = MODIFY_TEST_CONTROLLER_ACTIONS.filter(action => {
    if (action.skip) {
      return !action.skip({
         operation: operation,
      });
    }
    return true;
  });

  return [
    ...controllerActions,
    ...controllerTestActions,
  ];
};

export const getServiceMethodActions = (operation) => {
  const serviceActions = MODIFY_SERVICE_ACTIONS.filter(action => {
    if (action.skip) {
      return !action.skip({
         operation: operation,
      });
    }
    return true;
  });
  
  const serviceTestActions = MODIFY_TEST_SERVICE_ACTIONS.filter(action => {
    if (action.skip) {
      return !action.skip({
         operation: operation,
      });
    }
    return true;
  });

  return [
    ...serviceActions,
    ...serviceTestActions,
  ];
};

export const getRepositoryMethodActions = (operation) => {
  const repositoryActions = MODIFY_REPOSITORY_ACTIONS.filter(action => {
    if (action.skip) {
      return !action.skip({
         operation: operation,
      });
    }
    return true;
  });
  
  const repositoryTestActions = MODIFY_TEST_REPOSITORY_ACTIONS.filter(action => {
    if (action.skip) {
      return !action.skip({
         operation: operation,
      });
    }
    return true;
  });

  return [
    ...repositoryActions,
    ...repositoryTestActions,
  ];
};

export const getMethodActions = (componentType, operation) => {
  if (componentType === 'controller') {
    return getControllerMethodActions(operation);
  } else if (componentType === 'service') {
    return getServiceMethodActions(operation);
  } else if (componentType === 'repository') {
    return getRepositoryMethodActions(operation);
  }
  return [];
};
