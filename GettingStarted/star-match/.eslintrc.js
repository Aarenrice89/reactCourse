module.exports = {
  "parser": "@babel/eslint-parser",
  "env": {
      "browser": true,
      "es2021": true,
      "commonjs": true,
      "es6": true,
      "node": true,
      "jest": true,
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
  ],
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 13,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "react-hooks"
  ],
  "settings": {
        "react": {
          "version": "17.x",
        },
      },
  "rules": {
    "react/prop-types": ["off"],
    "react/no-unescaped-entities": ["error", { "forbid": [">", "}"] }]
  }
};