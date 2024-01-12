// i18n-scanner.config.js
module.exports = {
  input: [
    "app/**/*.{js,jsx,ts,tsx}", // Adjust the path based on your project structure
    "components/**/*.{js,jsx,ts,tsx}", // Adjust the path based on your project structure
    "!app/**/*.spec.{js,jsx,ts,tsx}", // Exclude test files
    "!**/node_modules/**", // Exclude node_modules
  ],
  output: "./",
  options: {
    debug: true,
    removeUnusedKeys: true,
    sort: true,
    func: {
      list: ["t", "i18next.t", "translate", "useTranslation"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    trans: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    lngs: ["en", "fa"], // Add your supported languages here
    defaultLng: "en",
    resource: {
      loadPath: "hooks/useTranslate/{{lng}}/{{ns}}.json",
      savePath: "hooks/useTranslate/{{lng}}/{{ns}}.json",
    },
  },
};
