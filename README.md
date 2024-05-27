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

If you encounter issues during the installation, refer to the troubleshooting steps in the table below.

| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| **Network Timeout** | Slow or unstable internet connection | Increase the timeout duration by using: `curl -fsSL --connect-timeout 60 https://bun.sh/install | bash` |
| **Manual Download Required** | Automatic download fails | Manually download the Bun binary from the [Bun releases page on GitHub](https://github.com/oven-sh/bun/releases/latest). Extract the binary and place it in a directory that is in your system's PATH. |
| **Permissions Issue** | Bun binary is not executable | Ensure the Bun binary is executable by running: `chmod +x ~/.bun/bin/bun` |
| **PATH Not Updated** | `~/.bun/bin` not in PATH | Verify and manually add it to your PATH by editing your shell configuration file (`~/.zshrc` for zsh): `echo 'export PATH="$HOME/.bun/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc` |
| **TTY Initialization Failed** | Terminal handling issues or TTY not supported | Run without TTY by setting the environment variable: `NO_TTY=1 bun install` or disable telemetry: `export NUXT_TELEMETRY_DISABLED=1` |
| **Telemetry Prompt Issue** | Nuxt telemetry prompt causing issues | Set an environment variable to disable the telemetry prompt: `export NUXT_TELEMETRY_DISABLED=1` |
| **Conflicting Aliases** | Conflicts with existing aliases or functions | Ensure there are no conflicting aliases or functions named `bun` by running: `type bun` |
| **Reinitialize Shell** | Shell environment not refreshed | Completely reinitialize your shell environment by starting a new shell session: `exec /bin/zsh` |

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
