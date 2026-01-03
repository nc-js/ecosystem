# nc-js/ecosystem

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/neoncitylights/js-eco/.github%2Fworkflows%2Fnode.yml?style=flat-square)](https://github.com/neoncitylights/js-eco/blob/main/.github/workflows/node.yml)

A comparison of tools within the JS ecosystem. It aims to compare/evaluate the following:

- How the JavaScript ecosystem evolves over time
- A reasonable, minimal configuration setup for a given toolchain
- Compile & transpilation time
- Compression/minification of code, compression time

## Develop locally

```shell
git clone https://github.com/nc-js/ecosystem.git
cd js-eco
pnpm install
pnpm run build
```

## Structure

At the moment, the top-level directories include:

- `/libs`: Comparison of build tools for creating distributable libraries

Each subdirectory name in the repository generally follows the naming convention below:

```txt
{{runtime}}-{{tool}}-{{language}}-{{module-system}}
```

- `{{runtime}}`: JavaScript runtime implementation. Choices: `browser`, `node`, `deno`, `bun`
- `{{tool}}`: build tool (e.g. Vite, Parcel, Webpack, esbuild, Rollup, Babel, etc.). If it does not use a build tool, it will say `native` (pure HTML/CSS/JS).
- `{{language}}`: JavaScript language. Choices: `ts`, `js`
- `{{module-system}}`: JavaScript module resolution strategy. Choices: `esm`, `cjs`, `umd`, `amd`

## Questions and answers

- **Why do pure JS libraries still include TypeScript as a developer dependency?**: While the source code may not be written in TypeScript, TypeScript is responsible for generating [declaration files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction) (`.d.ts`) during the build process to provide types.
- **Why does every `package.json` include `"private": true`?**: This monorepo only provides these setups for demonstration purposes. It does not intend to publish them to the NPM registry, hence why the `private` key is set. When you write your own library you'd like to distribute, you should remove this.
- **Why does every library include `publint` as a developer dependency and script?**: This monorepo uses the publint tool to ensure every setup is guaranteed to be usable when publicly distributed. Check [publint's official website](https://publint.dev/#docs) for more information.

## License

This repository is licensed under the MIT license ([`LICENSE-MIT`](./LICENSE) or <http://opensource.org/licenses/MIT>).

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the MIT license, shall be licensed as above, without any additional terms or conditions.
