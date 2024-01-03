module.exports = {
  // 环境:
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["plugin:vue/vue3-strongly-recommended", "airbnb-base", "prettier"],
  parser: "vue-eslint-parser",
  // 解析器的配置项
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      tsx: true,
      jsx: true
    }
  },
  // 全局自定义的宏，这样在源文件中使用全局变量就不会报错或者警告
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefault: "readonly"
  },
  // parser为 vue-eslint-parser，放在上面的parsr字段，rules放在extends字段里，选择合适的规则
  plugins: ["vue", "@typescript-eslint"],
  settings: {
    // 设置项目内的别名
    "import/reslover": {
      alias: {
        map: [["@", "./src"]]
      }
    },
    // 允许的扩展名
    "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".mjs"]
  },
  // 自定义规则，覆盖上面extends继承的第三方库的规则，根据组内成员灵活定义
  rules: {
    "import/no-extraneous-dependencies": 0,
    "no-param-reassing": 0,
    "vue/multi-word-commponent-names": 0,
    "vue/attribute-hyphenation": 0,
    "vue/v-on-event-hyphenation": 0
  }
};
