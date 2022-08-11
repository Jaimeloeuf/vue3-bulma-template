# vue3-bulma-template
A simple to use frontend template based on [`vue3`](https://v3.vuejs.org/guide/introduction.html) and [`bulma`](https://bulma.io/).

This TypeScript template helps you get started with developing Vue 3 applications quickly and easily, and is designed for building applications that is mobile friendly with persisted state across sessions.

Get started by
1. Either (in order of preference)
    1. Clicking the `use this template` button on github
    1. Download this repo as a ZIP file using the github button (so it will not have any `.git` config) and extracting it
    <!-- 1. Download this repo locally and unzip it with
        - `git archive --verbose --format zip --remote=https://github.com/Enkel-Digital/vue3-bulma-template.git --output "vue3-bulma-template.zip" master -0`
            - This will give you an uncompressed archive (-0 is the flag for uncompressed)
        - Then unzip it depending on your platform, e.g. using windows' file explorer, [with powershell](https://stackoverflow.com/a/27771099) or [on macOS and linux bash like shells](https://askubuntu.com/a/520555).
        - *This does not work with Github now -->
    1. Clone this repo locally and **manually deleting the `.git` folder**
        - Please note that you **MUST** delete the `.git` folder to use git yourself!!
    1. Forking this repo
1. Setup and customize this template by [following the steps below](#setup-steps)


## Basic commands
- Get started by installing dependencies
    - `npm i`
- Run in development mode
    - `npm run serve`
- Lint source files with ESLint
    - `npm run lint`
- Preview production build locally
    - `npm run preview`
- Run type check
    - `npm run typecheck`
- Build for production deployment
    - `npm run build`
- Run type check before full production build
    - `npm run build:full`


## Setup steps
### Required
1. Update [package.json](./package.json)
    - Set the package name and version
    - Remember to run `npm i` after update to get npm to update your `package-lock.json` file
1. Update the title of your application in [index.html](./index.html)
1. Update the [favicon](./public/favicon.ico)
1. Start creating your Vue SFCs with the 2 provided templates using either the [Option API](./src/components/TemplateOptions.vue) or the [Composition API](./src/components/TemplateComposition.vue)
1. Set the base URL of the API library in [main.ts](./src/main.ts) for your own API service if any

### Optional
1. Consider using the recommended development environment by following [this](#recommended-ide-setup)
1. Create a [.env](./.env) file in your root directory to set environment variables
    - See <https://vitejs.dev/guide/env-and-mode.html> for reference on how to use `.env` files
    - Set `VITE_API_URL` to use as the API default base URL if you are not using the ternary method in [main.ts](./src/main.ts)
1. If you are **using github pages** to deploy and host your application, you need to update your [vite config file](./vite.config.ts)
    1. You might need to set the production base URL path as your repo's name if your repo is not the default account/organisation repo.
        - See section on [github-pages deployment](#github-pages) for more details.
    1. You need to delete the `base` property used for demo purposes.
1. If you are **not using github pages** to deploy and host your application, you can delete the [public/.nojekyll](./public/.nojekyll) file so that it is not copied into your build output.
    - The file is there to make github pages deployments work, it is not required and can be left alone for almost all other deployment and hosting strategies.
    - See section on [github-pages deployment](#github-pages) for more details.
1. By default, the Bulma CSS library dependency will be bundled on build, if you prefer using a CDN to load Bulma instead, follow the instructions in [main.ts](./src/main.ts) and [index.html](./index.html) to modify how Bulma is loaded.


## Dependencies
- [`TypeScript`](https://www.npmjs.com/package/typescript) as the language
- [`vue3`](https://www.npmjs.com/package/vue)
- [`vue-router`](https://www.npmjs.com/package/vue-router)
- [`pinia`](https://www.npmjs.com/package/pinia) for state management
- [`pinia-plugin-persistedstate`](https://www.npmjs.com/package/pinia-plugin-persistedstate) to persist state across sessions in localStorage
- [`bulma`](https://www.npmjs.com/package/bulma) CSS library as the main styling dependency
- [`simpler-fetch`](https://www.npmjs.com/package/simpler-fetch) as the API library


## DevDependencies
- [`prettier`](https://npmjs.com/package/prettier)
- [`eslint`](https://npmjs.com/package/eslint), this template is configured to follow the [Vue.js style guide](https://vuejs.org/style-guide/)
- [`gh-pages`](https://npmjs.com/package/gh-pages) is ran using [npx](https://www.npmjs.com/package/npx) when deploying to github pages, and so it will only be temporarily installed if deploying to github pages.


## Technical details and notes
- vue router is configured to use `# hashed based routing` rather than history mode
- Basic PWA support is enabled by default, see [vite config](./vite.config.ts) for more details
- In development mode, vite is configured to use HTTPS by default as many use cases such as getting camera access require application to be loaded over HTTPS.


## Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

Please make sure to disable Vetur when using this project in vs code, because with vetur installed, you will face these issues:
- Duplicated code intellisense provider, so for example when trying to use intellisense to jump to definition, it will not jump if there is more than 1 definition found, because both Volar and Vetur can find the definition.
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
To use Github Pages, ensure that the production base URL is set properly in your [vite config file](./vite.config.ts) before building and deploying the site.
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