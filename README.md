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

Preview production build locally
```shell
npm run preview
```

Build for production deployment
```shell
npm run build
```


## Setup steps
1. Update [package.json](./package.json)
    - Set the package name and version
    - Remember to run `npm i` after update to get npm to update your `package-lock.json` file
1. Update the title of your application in [index.html](./index.html)
1. Create a [.env](./.env) file in your root directory to set environment variables
    - See <https://vitejs.dev/guide/env-and-mode.html> for reference on how to use `.env` files
    - Set `VITE_API_URL` to use as the API default base URL if you are not using the ternary method in [main.js](./src/main.js)


## Dependencies
- vue3
- vue router
- bulma as the main styling dependency
- simpler-fetch as the basic API library


## Technical details and notes
- The vue router uses `# hashed based routing` rather than history mode


## License & Author
Made available with [MIT license](./LICENSE) by [JJ](https://github.com/Jaimeloeuf)