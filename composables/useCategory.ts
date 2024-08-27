const defaultCategory = 'SDK Docs';

// Order by most specific to least specific.
// e.g. `/js/ethers/api/v5` before `/js/ethers`
const categories = [
  ['/js/ethers/api/v5', 'Ethersv5 API'],
  ['/js/ethers/api/v6', 'Ethersv6 API'],
  ['/js/ethers', 'EthersJS'],
  ['/js/web3js', 'Web3JS'],
  ['/go/api', 'Go API'],
  ['/go', 'Go SDK'],
  ['/python/api', 'Python API'],
  ['/python', 'Python SDK'],
  ['/java/api', 'Java API'],
  ['/java', 'Java SDK'],
  ['/swift/api', 'Swift API'],
  ['/swift', 'Swift SDK'],
  ['/rust', 'Rust SDK'],
] as const;

/**
 * Returns the category of the current route.
 * Primarily this is for the algolia docsearch
 */
export const useCategory = () => {
  const route = useRoute();
  const category = ref(defaultCategory);
  // for if we ever have i18n routes, remove the language prefix
  // const langAgnosticPath = route.path.replace(/\/\w\w(-\w\w)?\//, '');
  for (const [path, label] of categories) {
    if (route.path.startsWith(path)) {
      category.value = label;
      break;
    }
  }
  return category;
};
