/**
 * Conditionally joins class names together.
 *
 * @param {...(string|object|Array<string|object|Array>|boolean|null|undefined)} args -
 * Multiple arguments, where each argument can be:
 * - A string: Added directly to the class list.
 * - An object: Keys are class names, and values are booleans
 * (or truthy/falsy) indicating whether the class should be included.
 * - An array: Recursively processes elements within the array.
 * - Boolean, null, undefined: Ignored.
 *
 * @returns {string} A space-separated string of active class names.
 */
export function classNames(...args) {
  const classes = [];

  args.forEach(arg => {
    if (!arg) return; // Ignore falsy values like null, undefined, false

    const type = typeof arg;

    if (type === 'string' || type === 'number') {
      classes.push(arg);
    } else if (type === 'object') {
      if (Array.isArray(arg)) {
        // Recursively process arrays
        const innerClasses = classNames(...arg);
        if (innerClasses) {
          classes.push(innerClasses);
        }
      } else {
        // Process objects for conditional classes
        for (const key in arg) {
          if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }
  });

  return classes.join(' ');
}