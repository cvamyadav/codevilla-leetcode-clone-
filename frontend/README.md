# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# Using the template
To use this template, you can run the following command:

```bash
npx degit https://github.com/vitejs/vite-react-ts-template my-app
cd my-app
npm install
```   
# Running the app
To run the app, you can use the following command:

```bash
npm run dev
```
# Building the app
To build the app for production, you can use the following command:

```bash
npm run build
```
# Previewing the app
To preview the built app, you can use the following command:

```bash
npm run preview
```
# Testing the app
To run tests, you can use the following command:

```bash
npm run test
```
# Linting the app
To lint the app, you can use the following command:

```bash
npm run lint
```
# Formatting the app
To format the app, you can use the following command:

```bash
npm run format
```
# Cleaning the app

To clean the app, you can use the following command:

```bash
npm run clean
```
# Updating dependencies
To update dependencies, you can use the following command:

```bash
npm update

# or
yarn upgrade
```
