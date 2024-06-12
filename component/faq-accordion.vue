<script setup lang="ts">
const items = [
  {
    label: 'What is zksync Era?',
    content:
      'zksync Era is a Layer 2 scaling solution for Ethereum, using zk-rollup technology to provide scalable and low-cost transactions while maintaining the security and trust of the Ethereum blockchain.',
  },
  {
    label: 'What are zksync Era SDKs?',
    content:
      'zksync Era SDKs are toolkits designed to help developers build decentralized applications (dApps) on the zksync Era network. They provide the necessary libraries and tools to interact with zksync.',
  },
  {
    label: 'How do I get started with zksync Era SDKs',
    content:
      'You can start by visiting the official zksync documentation, which provides comprehensive guides, tutorials, and API references to help you begin building dApps on zksync Era',
  },
  {
    label: 'What types of dApps can be built using zksync Era SDKs?',
    content:
      'zksync Era SDKs can be used to build a variety of dApps, including DeFi protocols, NFT marketplaces, gaming applications, and more, leveraging ethereum smart contract capabilities.',
  },
  {
    label: 'Can zksync Era be used for NFT applications?',
    content:
      'Yes, zksync Era supports the ERC-721 standard, enabling the development of NFT applications on its platform.',
  },
  {
    label: 'How does zksync Era handle data availability?',
    content:
      'zksync Era uses off-chain storage for most data, with periodic updates and validity proofs submitted to the Ethereum mainnet to ensure data availability and security.',
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
