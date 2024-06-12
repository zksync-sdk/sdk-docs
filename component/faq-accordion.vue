<script setup lang="ts">
const items = [
  {
    label: 'What is zkSync Era?',
    content:
      'zkSync Era is a Layer 2 scaling solution for Ethereum, using zk-rollup technology to provide scalable and low-cost transactions while maintaining the security and trust of the Ethereum blockchain.',
  },
  {
    label: 'What are zkSync Era SDKs?',
    content:
      'zkSync Era SDKs are toolkits designed to help developers build decentralized applications (dApps) on the zkSync Era network. They provide the necessary libraries and tools to interact with zkSync.',
  },
  {
    label: 'How do I get started with zkSync Era SDKs',
    content:
      'You can start by visiting the official zkSync documentation, which provides comprehensive guides, tutorials, and API references to help you begin building dApps on zkSync Era',
  },
  {
    label: 'What types of dApps can be built using zkSync Era SDKs?',
    content:
      'zkSync Era SDKs can be used to build a variety of dApps, including DeFi protocols, NFT marketplaces, gaming applications, and more, leveraging Ethereums smart contract capabilities.',
  },
  {
    label: 'Can zkSync Era be used for NFT applications?',
    content:
      'Yes, zkSync Era supports the ERC-721 standard, enabling the development of NFT applications on its platform.',
  },
  {
    label: 'How does zkSync Era handle data availability?',
    content:
      'zkSync Era uses off-chain storage for most data, with periodic updates and validity proofs submitted to the Ethereum mainnet to ensure data availability and security.',
  },
];
</script>

<template>
  <UAccordion
    color="white"
    variant="ghost"
    size="sm"
    :items="items"
  />
</template>
