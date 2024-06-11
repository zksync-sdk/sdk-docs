# ZKsync SDK Docs

[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE-MIT)
[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-orange)](LICENSE-APACHE)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-orange)](CONTRIBUTING.md)
[![X (formerly Twitter) Follow](https://badgen.net/badge/twitter/@zksyncDevs/1DA1F2?icon&label)](https://x.com/zksyncDevs)

Welcome to the ZKsync SDK Docs repository.
This project is for documenting the SDKs available for ZKsync development.

## 🚀 Quick Start

1. **Install Bun:** Follow the [installation instructions](https://bun.sh/docs/installation).
2. **Install Dependencies:**

   ```sh
   bun install
   ```

3. **Run Locally:** Start the development server at `http://localhost:3000`.

   ```sh
   bun run dev
   ```

## 🛠️ Built With

- [Vue](https://vuejs.org/)
- [Nuxt](https://nuxt.com/)
- [Nuxt Content](https://content.nuxt.com/)
- [Nuxt UI & Nuxt UI Pro](https://ui.nuxt.com/)
- [Tailwind](https://tailwindcss.com/)
- [Bun](https://bun.sh/)

## 👀 Local Preview

To locally preview the production build, first run `bun run build` to build the project, then run the following:

```shell
bun run preview
```

## ✨ Lint & Formatting

This project provides lint commands to check the project.

### Run CI Checks ✔️

This command will run all of the lint commands together.

```shell
bun run ci:check
```

### Markdown Linting 📝

Markdown files are found in the `/content` directory. The following lint commands will run within that directory:

```shell
bun run lint:spelling
bun run lint:markdown
```

### Linting 🧹

The following commands are available to run code linting on the project:

```shell
bun run lint:prettier
bun run lint:eslint
```

## 🤝 Contributions

The ZKsync SDK Docs is open for editing by maintainers and contributors of 3rd-party SDKs for ZKsync.
Follow the [recommended guidelines for writing content](https://docs.zksync.io/contributing-to-documentation/documentation-styleguide)
on the ZKsync Docs website.
