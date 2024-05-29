# Contributing

This guide helps outline some ways to help with making your contributions
to this project as smooth as possible.

## 🌳 Create a branch for your work

Create new branches from the default branch which is `main`.
We currently do not support forked projects and our configured workflows
will fail for branches that come from forked projects.

Once your PR has been triaged by the team, if this is your first PR you
will receive an invite to have write permissions to the project.

If your PR is still a work in progress, consider putting it into a [Draft status](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#converting-a-pull-request-to-a-draft).
Once your PR is ready for review, switch it back to an active PR request
and any reviewers already attached will automatically get a notification.

## ↦ Commit conventions

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standards.
For changes that are **code related**, use the `fix:`, `feat:`, or `chore:` tags in your commits.
For typo or document related changes, please use the `docs:` tag.

```sh
git commit -m "docs: fix typo in guide"
```

## Linting

This project has commit hooks to run some lint commands on a commit.
To run these commands yourself, run `bun run ci:check`.

To take full advantage of linting and formatting features, it is highly
recommended to use [VSCode](https://code.visualstudio.com/) and install the recommended extensions.
To manually install the recommended extensions, go to the Extensions tab
in VSCode and search for `@recommended`.
