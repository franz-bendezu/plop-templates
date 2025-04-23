/**
 * Helper functions for templates
 */

/**
 * Compare two values for equality
 * 
 * @param {any} a - First value to compare 
 * @param {any} b - Second value to compare
 * @param {object} options - Handlebars options object
 * @returns {string} - Result of block helper
 */
export function ifEquals(a, b, options) {
  return a === b ? options.fn(this) : options.inverse(this);
}

// Add more helper functions as needed
