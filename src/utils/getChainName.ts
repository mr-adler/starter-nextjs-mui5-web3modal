import { chainNames, Chains } from 'constants/chains'

export const getChainName = (chain: Chains | number): string | number => {
  if (chain in chainNames) {
    return chainNames[chain]
  }

  return chain
}
