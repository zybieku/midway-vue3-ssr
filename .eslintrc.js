module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["standard-vue-ts", "plugin:vue/vue3-recommended"],
  globals: {
    __isBrowser__: "readonly",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
