import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default [
  {
    input: "./src/index-commonjs.js",
    output: {
      file: "./index.js",
      format: "es"
    },
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: false
      }),
      commonjs({
        namedExports: {
          "./src/index-commonjs.js": ["uuidv1", "uuidv3", "uuidv4", "uuidv5"]
        }
      })
    ]
  },
  {
    input: "./node_modules/uuid/v1.js",
    output: {
      file: "./v1.js",
      format: "es"
    },
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: false
      }),
      commonjs({
        namedExports: {
          "./node_modules/uuid/v1.js": ["uuidv1"]
        }
      })
    ]
  },
  {
    input: "./node_modules/uuid/v3.js",
    output: {
      file: "./v3.js",
      format: "es"
    },
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: false
      }),
      commonjs({
        namedExports: {
          "./node_modules/uuid/v3.js": ["uuidv3"]
        }
      })
    ]
  },
  {
    input: "./node_modules/uuid/v4.js",
    output: {
      file: "./v4.js",
      format: "es"
    },
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: false
      }),
      commonjs({
        namedExports: {
          "./node_modules/uuid/v4.js": ["uuidv4"]
        }
      })
    ]
  },
  {
    input: "./node_modules/uuid/v5.js",
    output: {
      file: "./v5.js",
      format: "es"
    },
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: false
      }),
      commonjs({
        namedExports: {
          "./node_modules/uuid/v5.js": ["uuidv5"]
        }
      })
    ]
  }

];
