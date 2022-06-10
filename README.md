# vue3-bulma-template
A simple to use frontend template based on vue3 and bulma.

This TypeScript template should help you start developing Vue 3 applications quickly and easily, and is designed for building applications that is mobile friendly with persisted state across sessions.

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
1. If you are **not using github pages** to deploy and host your application, you may want to consider deleting the [public/.nojekyll](./public/.nojekyll) file so that it is not copied into your build output. This is not required and can be left alone for almost all other deployment and hosting strategies.
    - See section on [github-pages deployment](#github-pages) for more details.


## Dependencies
- TypeScript as the language
- vue3
- vue router
- pinia for state management
- pinia-plugin-persistedstate to persist state across sessions in localStorage
- bulma as the main styling dependency
- simpler-fetch as the basic API library


## DevDependencies
- prettier
- Eslint, this template follows the [Vue.js style guide](https://vuejs.org/style-guide/)
- `simple-github-pages-deploy` is ran using [npx](https://www.npmjs.com/package/npx) when deploying to github pages, and so it will only be temporarily installed if using github pages.


## Technical details and notes
- vue router is configured to use `# hashed based routing` rather than history mode


## Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

Please make sure to disable Vetur when using this project in vs code, because with vetur installed, you will face these issues:
- Duplicate code intellisense provider, so for example when trying to use intellisense to jump to definition, it will not jump if there is more than 1 definition found, because both Volar and Vetur can find the definition.
- Vetur will error out when using composition API with a single `<script setup>` block, because it will not be able to understand the setup block and thus think that there is no default export when there is actually.


## Type Support for `.vue` Imports in TS
TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.


## Deployment
### Github Pages
To deploy using Github Pages, build the site first before running deployment.
```shell
# Build the site and write build output to ./docs
# The default npm run build writes build output to ./dist
npm run build:gh-pages

# Deploys ./docs folder to github pages
npm run deploy:gh-pages
```

Github uses jekell to build and deploy your static site to github pages, and so, there are some filenames that are not allowed such as files that start with a period `.` or underscore `_` which poses a problem as some build output files have underscore characters.

The solution to this is to ensure that a [.nojekyll](./public/.nojekyll) file is placed in the root of the build output directory, which for github pages is [./docs](./docs). However, since it is troublesome to always manually create the file after building, a `.nojekyll` file is placed in [./public](./public/) so that it is automatically copied into the root of the build output directory on every build.

References:
- <https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll>
- <https://github.community/t/unable-to-access-resources-in-folder-with-name-starting-with/10505>


## License & Author
Made available with [MIT license](./LICENSE), created by [JJ](https://github.com/Jaimeloeuf)