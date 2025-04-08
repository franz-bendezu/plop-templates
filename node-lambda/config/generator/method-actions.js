import { MODIFY_CONTROLLER_ACTIONS } from "./actions/controller-actions.js";
import { MODIFY_REPOSITORY_ACTIONS } from "./actions/repository-actions.js";
import { MODIFY_SERVICE_ACTIONS } from "./actions/service-actions.js";
import { MODIFY_TEST_CONTROLLER_ACTIONS } from "./actions/test-controller-actions.js";
import { MODIFY_TEST_REPOSITORY_ACTIONS } from "./actions/test-repository-actions.js";
import { MODIFY_TEST_SERVICE_ACTIONS } from "./actions/test-service-actions.js";

export const getControllerMethodActions = (methodType) => {
  const controllerActions = MODIFY_CONTROLLER_ACTIONS.filter(action => {
    if (action.skip) {
      return !action.skip({
         operation: methodType,
      });
    }
    return true;
  });
  
  const controllerTestActions = MODIFY_TEST_CONTROLLER_ACTIONS.filter(action => {
    if (action.skip) {
      return !action.skip({
         operation: methodType,
      });
    }
    return true;
  });

  return [
    ...controllerActions,
    ...controllerTestActions,
  ];
};

export const getServiceMethodActions = (methodType) => {
  const serviceActions = MODIFY_SERVICE_ACTIONS.filter(action => {
    if (action.skip) {
      return !action.skip({
         operation: methodType,
      });
    }
    return true;
  });
  
  const serviceTestActions = MODIFY_TEST_SERVICE_ACTIONS.filter(action => {
    if (action.skip) {
      return !action.skip({
         operation: methodType,
      });
    }
    return true;
  });

  return [
    ...serviceActions,
    ...serviceTestActions,
  ];
};

export const getRepositoryMethodActions = (methodType) => {
  const repositoryActions = MODIFY_REPOSITORY_ACTIONS.filter(action => {
    if (action.skip) {
      return !action.skip({
         operation: methodType,
      });
    }
    return true;
  });
  
  const repositoryTestActions = MODIFY_TEST_REPOSITORY_ACTIONS.filter(action => {
    if (action.skip) {
      return !action.skip({
         operation: methodType,
      });
    }
    return true;
  });

  return [
    ...repositoryActions,
    ...repositoryTestActions,
  ];
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
