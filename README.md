# zkSync SDK Docs

Welcome to the zkSync SDK Docs repository.
This project is for documenting the SDKs available for zkSync development.

## Tools used

- [Vue](https://vuejs.org/)
- [Nuxt](https://nuxt.com/)
- [Nuxt Content](https://content.nuxt.com/)
- [Nuxt UI & Nuxt UI Pro](https://ui.nuxt.com/)
- [Tailwind](https://tailwindcss.com/)
- [Bun](https://bun.sh/)

## Local Setup

This project uses bun to run, follow the [bun installation instructions](https://bun.sh/docs/installation).
Once bun is installed, run the following command to install all project dependencies:

```shell
bun install
```

## Development

To run the project locally at `http://localhost:3000`

```shell
bun run dev -o
```

## Troubleshooting Guide

If you encounter issues during the installation, refer to the [troubleshooting guide](https://staging-docs.zksync.io/sdk/troubleshooting/troubleshooting#bun)!

## Lint & Formatting

This project provides lint commands to check the project.

### Markdown Linting

Markdown files are found in the `/content` directory. The following lint commands will run within that directory:

```shell
bun run lint:spelling
bun run lint:markdown
```

### Linting

The following commands are available to run linting on the project:

```shell
bun run lint:prettier
bun run lint:eslint
```

## Contributing to zkSync SDK Docs

The zkSync SDK Docs is open for editing by maintainers and contributors of 3rd-party SDKs for zkSync.
Follow the [recommended guidelines for writing content](https://docs.zksync.io/contributing-to-documentation/documentation-styleguide)
on the zkSync Docs website.
