/* eslint-env node */

// Reference: https://github.com/microsoft/rushstack/tree/main/eslint/eslint-patch
// Patches the ESLint engine so that its module resolver will load relative
// to the folder of the referencing config file, rather than the project folder,
// to allow a shared ESLint config to bring along its own plugins,
// rather than imposing peer dependencies on every consumer of this config.
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,

  env: {
    // https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits
    // https://eslint.vuejs.org/user-guide/#compiler-macros-such-as-defineprops-and-defineemits-generate-no-undef-warnings
    // This allows the use of compiler macros such as `defineProps` (vue3 only)
    // within SFC script tags without any imports.
    "vue/setup-compiler-macros": true,
  },

  plugins: [
    // https://github.com/import-js/eslint-plugin-import
    "import",
  ],

  extends: [
    "plugin:import/typescript",

    // Vue specific extensions
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",

    // Might consider using rushstack's eslint config if using this in a monorepo setting
    // https://www.npmjs.com/package/@rushstack/eslint-config
  ],

  rules: {
    // Prevent the use of `var`, prefer const and let instead
    // https://eslint.org/docs/latest/rules/no-var
    "no-var": "error",

    // Prevent a module from importing itself
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
    "import/no-self-import": "error",

    // Prevent the use of default exports, only turn this on if using Options API exclusively as composition API will still be a default export
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default-import.md
    // "import/no-default-export": "error",

    /* Rules below are vue specific rules */

    // This is a rule from "plugin:vue/vue3-essential"
    // This rule prevents use of single word component names to prevent
    // any potential name collisions with HTML elements in the future.
    // However this becomes too restrictive, so as long as components
    // are carefully named, it should not be a problem!
    "vue/multi-word-component-names": "off",

    // This rule is included by both "plugin:vue/vue3-strongly-recommended" and "plugin:vue/vue3-recommended"
    // This rule prevents the use of camelCase HTML attributes when used for passing props in a parent component.
    // This is disabled because by using this rule, there is a mismatch between the prop
    // name defined in the child component and the prop name used in the parent component.
    "vue/attribute-hyphenation": ["error", "never"],
  },
};
