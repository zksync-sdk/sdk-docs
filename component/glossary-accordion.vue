<script setup lang="ts">
const items = [
  {
    label: 'ZKsync Era',
    content:
      'ZKsync Era is a Layer 2 scaling solution for Ethereum, utilizing zk-rollup technology to enable scalable and low-cost transactions while maintaining the security and trust of the Ethereum blockchain.',
  },
  {
    label: 'ZK-Rollup',
    content:
      'A type of Layer 2 scaling solution that bundles multiple transactions into a single batch and generates a cryptographic proof (known as a zero-knowledge proof) that is submitted to the Ethereum mainnet. This process increases throughput and reduces fees.',
  },
  {
    label: 'Layer 2 (L2)',
    content:
      'A secondary framework or protocol that is built on top of an existing blockchain system (Layer 1). Layer 2 solutions aim to improve the scalability and efficiency of the underlying blockchain.',
  },
  {
    label: 'Layer 1 (L1)',
    content:
      'The base layer or main blockchain architecture, such as the Ethereum mainnet, which handles all transaction validations and security.',
  },
  {
    label: 'SDK (Software Development Kit)',
    content:
      'A collection of software tools, libraries, documentation, and code samples that enable developers to create applications for a specific platform.',
  },
  {
    label: 'dApp (Decentralized Application)',
    content:
      'An application that runs on a decentralized network, such as Ethereum, utilizing smart contracts to function without a central authority.',
  },
  {
    label: 'ERC-20',
    content:
      'A widely-used standard for creating fungible tokens on the Ethereum blockchain. It ensures that tokens can be traded, transferred, and managed consistently across different platforms and applications.',
  },
  {
    label: 'ERC-721',
    content:
      'A standard for creating non-fungible tokens (NFTs) on the Ethereum blockchain. NFTs are unique digital assets that can represent ownership of real-world items, digital art, collectibles, and more.',
  },
  {
    label: 'ERC-1155',
    content:
      'A multi-token standard that supports both fungible and non-fungible tokens within a single contract, offering more flexibility and efficiency in managing various types of assets.',
  },
  {
    label: 'ZKsync Sepolia Explorer',
    content:
      'A block explorer specifically for the ZKsync Era on the Sepolia testnet, providing detailed information about transactions, blocks, and addresses on the network.',
  },
  {
    label: 'Bun',
    content:
      'A fast JavaScript runtime and package manager compatible with Node.js packages, designed to improve the performance and developer experience for building JavaScript applications.',
  },
  {
    label: 'Ethers.js',
    content:
      'A library for interacting with the Ethereum blockchain, providing a comprehensive and straightforward API for developers to integrate Ethereum-based functionalities into their applications.',
  },
  {
    label: 'PATH',
    content:
      'An environment variable in Unix-like operating systems and Windows, specifying a set of directories where executable programs are located.',
  },
  {
    label: 'Shell Configuration File',
    content:
      'A script file that initializes variables and settings for a shell session, such as `.bashrc` for Bash or `.zshrc` for Zsh.',
  },
];
</script>

<template>
  <UAccordion
    color="white"
    variant="ghost"
    size="md"
    :items="items"
  />
</template>
