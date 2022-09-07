export enum Chains {
  MAIN_NET = 1,
  RINKEBY = 4,
  BINANCE = 56,
  SMARTCHAIN_TEST = 97,
  POLYGON = 137,
  MUMBAI = 80001,
}

export const chainNames: Record<number, string> = {
  [Chains.MAIN_NET]: 'Ethereum network',
  [Chains.BINANCE]: 'Binance Smart Chain',
  [Chains.RINKEBY]: 'Rinkeby',
  [Chains.SMARTCHAIN_TEST]: 'BNB Smart Chain TEST',
  [Chains.POLYGON]: 'Polygon Network',
  [Chains.MUMBAI]: 'Mumbai Chain TEST',
}
