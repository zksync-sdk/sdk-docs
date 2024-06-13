<script setup lang="ts">
const items = [
  {
    label: 'What is ZKsync Era?',
    content:
      'ZKsync Era is a Layer 2 scaling solution for Ethereum, using zk-rollup technology to provide scalable and low-cost transactions while maintaining the security and trust of the Ethereum blockchain.',
  },
  {
    label: 'What are ZKsync Era SDKs?',
    content:
      'ZKsync Era SDKs are toolkits designed to help developers build decentralized applications (dApps) on the ZKsync Era network. They provide the necessary libraries and tools to interact with ZKsync.',
  },
  {
    label: 'How do I get started with ZKsync Era SDKs?',
    content:
      'You can start by visiting the official ZKsync documentation, which provides comprehensive guides, tutorials, and API references to help you begin building dApps on ZKsync Era.',
  },
  {
    label: 'What types of dApps can be built using ZKsync Era SDKs?',
    content:
      'ZKsync Era SDKs can be used to build a variety of dApps, including DeFi protocols, NFT marketplaces, gaming applications, and more, leveraging Ethereum smart contract capabilities.',
  },
  {
    label: 'Can ZKsync Era be used for NFT applications?',
    content:
      'Yes, ZKsync Era supports the ERC-721 standard, enabling the development of NFT applications on its platform.',
  },
  {
    label: 'How does ZKsync Era handle data availability?',
    content:
      'ZKsync Era uses off-chain storage for most data, with periodic updates and validity proofs submitted to the Ethereum mainnet to ensure data availability and security.',
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
