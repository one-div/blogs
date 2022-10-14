module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    // "prettier/prettier": [
    //   "error",
    //   {
    //     endOfLine: "auto",
    //   },
    // ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 关闭组件命名规则
    // "vue/multi-word-component-names": "off",
    // "eslint-disable-next-line":false,
    // "no-unused-vars": 1 ,
    // "eslint-disable-next-line":1,
    // quotes: "off",
    // "no-unused-vars": "off",
    // "linebreak-style": [0, "error", "windows"],
  },
};
