# vue3-bulma-template
A simple to use frontend template based on vue3 and bulma.

[See below on how to setup and customize this template](#setup-steps)


## Basic commands
Get started by installing dependencies
```shell
npm i
```

Run in development mode
```shell
npm run serve
```

Lint source files with ESLint
```shell
npm run lint
```

Preview production build locally
```shell
npm run preview
```

Build for production deployment
```shell
npm run build
```


## Setup steps
1. Consider using the recommended development environment by following [this](#recommended-ide-setup)
1. Update [package.json](./package.json)
    - Set the package name and version
    - Remember to run `npm i` after update to get npm to update your `package-lock.json` file
1. Update the title of your application in [index.html](./index.html)
1. Create a [.env](./.env) file in your root directory to set environment variables
    - See <https://vitejs.dev/guide/env-and-mode.html> for reference on how to use `.env` files
    - Set `VITE_API_URL` to use as the API default base URL if you are not using the ternary method in [main.js](./src/main.js)
1. Update the [favicon](./public/favicon.ico)


## Dependencies
- TypeScript as the language
- vue3
- vue router
- pinia for state management
- pinia-plugin-persistedstate to persist state across sessions in localStorage
- bulma as the main styling dependency
- simpler-fetch as the basic API library


## Technical details and notes
- vue router is configured to use `# hashed based routing` rather than history mode


## Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).


## Type Support for `.vue` Imports in TS
TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.


## License & Author
Made available with [MIT license](./LICENSE), created by [JJ](https://github.com/Jaimeloeuf)