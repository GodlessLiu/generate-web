module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // es的版本号，或者年份都可以
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    // 源码类型 默认是script，es模块用module
    sourceType: "module",
    // 额外的语言类型
    ecmaFeatures: {
      tsx: true,
      jsx: true
    }
  },
  settings: {
    // 设置项目内的别名
    "import/reslover": {
      alias: {
        map: [["@", "./src"]]
      }
    },
    // 允许的扩展名
    "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".mjs"],
    react: {
      version: "detect",
      flowVersion: "0.53"
    }
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "import/no-extraneous-dependencies": 0,
    "no-param-reassing": 0,
    "react/react-in-jsx-scope": "off",
    "react/multi-word-commponent-names": 0,
    "react/attribute-hyphenation": 0,
    "react/v-on-event-hyphenation": 0
  }
};
