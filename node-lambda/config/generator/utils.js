import {
  CREATE_ONE_OPERATION,
  READ_MANY_OPERATION,
  UPDATE_OPERATION,
  DELETE_OPERATION,
  CREATE_MANY_OPERATION,
  READ_ONE_OPERATION,
} from "../constants.js";

/**
 * Maps operations to their descriptions for better error messages
 */
export const OPERATION_DESCRIPTIONS = {
  [CREATE_ONE_OPERATION]: "create (single)",
  [CREATE_MANY_OPERATION]: "create (batch)",
  [READ_ONE_OPERATION]: "read (single)",
  [READ_MANY_OPERATION]: "read (multiple)",
  [UPDATE_OPERATION]: "update",
  [DELETE_OPERATION]: "delete",
};

/**
 * Creates a function that determines whether to skip an action based on the operation type
 * 
 * @param {string|string[]} requiredOperation - The operation(s) that should NOT be skipped
 * @param {string} componentName - The name of the component for better error messaging
 * @returns {(answers: {operation: string}) => string|undefined} A skip function that returns undefined to continue or a descriptive message to skip
 */
export const createSkipFunction = (requiredOperation, componentName) => {
  return (answers) => {
    // Handle both single operation and array of operations
    const operations = Array.isArray(requiredOperation) ? requiredOperation : [requiredOperation];
    
    if (!operations.includes(answers.operation)) {
      const requiredDesc = operations.map(op => OPERATION_DESCRIPTIONS[op] || op).join(', ');
      const currentDesc = OPERATION_DESCRIPTIONS[answers.operation] || answers.operation;
      
      return `Skipping ${componentName} - only needed for ${requiredDesc} operations (current: ${currentDesc})`;
    }
    return undefined; // Don't skip
  };
};
