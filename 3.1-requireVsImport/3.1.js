//Q: What is the difference between import and require?

/**
 * A:
 * Require:
 *
 * 1. Require is Non-lexical, it stays where they have put the file.
 * 2. It can be called at any time and place in the program.
 * 3. You can directly run the code with require statement.
 * 4. If you want to use require module then you have to save file with ‘.js’ extension.
 * 5. Enables dynamic loading where the loaded module name isn't predefined /static,
 * or where you conditionally load a module only if it's "truly required".
 * 6. Loading is synchronous. That means if you have multiple requires,
 *  they are loaded and processed one by one.
 *
 * Import:
 * 1. Import is lexical, it gets sorted to the top of the file.
 * 2.	It can’t be called conditionally, it always run in the beginning of the file.
 * 3. To run a program containing import statement you have to use experimental module feature flag.
 * 4. If you want to use import module then you have to save file with ‘.mjs’ extension.
 * 1. You can use named imports to selectively load only the pieces you need.
 * That can save memory.
 * 2. Import can be asynchronous and can perform a little better.
 */

// Q: How can you enable using the import syntax using node js

/**
 * A: 1. Install the latest version of Node.js.
 *    2. Second, add the "type": "module" line in your package.json file.
 *    3. Third, use the --experimental-modules flag when invoking nodejs:
 *
 *     node --experimental-modules app.js
 */

// Give 2 node.js environment variables that are not available
// when using the import syntax.
// Create 3 functions using the export/import syntax.
// Import the file system module using the import syntax.