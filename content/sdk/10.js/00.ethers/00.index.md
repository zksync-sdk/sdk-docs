---
title: "Getting Started"
description: "Explore zkSync-ethers SDK versions"
tags: ["zksync", "sdks", "zkSync Era SDK", "ethereum", "era network", "javascript versions"]
---

These versions help developers interact with the zkSync Era blockchain. It covers most common
operations developers require and provides a starting point for those new to the zkSync Era.

::callout
Take a look at the [migration guide](/sdk/js/ethers/v6/migration) if you are migrating from `zksync-web3`.
::

### Prerequisites

- Node: >=v18 ([installation guide](https://nodejs.org/en/download/package-manager))

### Installation

To install SDK for zkSync Era, follow the process below:

#### Step 1: Create a Folder

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to create your project folder.
3. Create a new folder for your project:

    ```sh
    mkdir zkSyncProject
    cd zkSyncProject
    ```

#### Step 2: Initialize a Node.js Project

1. Inside your project folder, initialize a new Node.js project:

    ```sh
    npm init -y
    ```

    This will create a `package.json` file.

#### Step 3: Install Required Packages

1. Install `zksync-ethers` and `ethers` packages:

::code-group

```sh [ethers-v5]
yarn add zksync-ethers@5
yarn add ethers@5 # ethers is a peer dependency of zksync-ethers
```

```sh [ethers-v6]
yarn add zksync-ethers
yarn add ethers@6 # ethers is a peer dependency of zksync-ethers
```

::

For more detailed information, learn more!

::card-group
::card
---
title: V5
to: /sdk/js/ethers/v5/getting-started
---
Integrate JS with zkSync Era for secure transactions.
::
::card
---
title: V6
to: /sdk/js/ethers/v6/getting-started
---
Integrate zksync GO SDK for zkSync Era features.
::
::

## Support

Find the resources you need for assistance with our personalized help services.

::card-group
::card
---
title: Community
icon: i-heroicons-users
to: https://join.zksync.dev
---
::
::card
---
title: Support Desk
icon: i-heroicons-computer-desktop
to: https://zksync.io/contact
---
::
::
