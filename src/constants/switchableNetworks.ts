import { ISwitchableNetwork } from 'models/ISwitchableNetwork'
import { Chains } from 'constants/chains'

export const SwitchableNetworks: ISwitchableNetwork[] = [
  {
    chainId: Chains.MAIN_NET,
    chainName: 'Ethereum Mainnet',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    blockExplorerUrls: ['https://etherscan.io'],
    rpcUrls: ['https://mainnet.infura.io'],
  },
  {
    chainId: Chains.BINANCE,
    chainName: 'Binance Smart Chain Mainnet',
    nativeCurrency: {
      name: 'Binance Chain Native Token',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: [
      'https://bsc-dataseed1.binance.org',
      'https://bsc-dataseed2.binance.org',
      'https://bsc-dataseed3.binance.org',
      'https://bsc-dataseed4.binance.org',
      'https://bsc-dataseed1.defibit.io',
      'https://bsc-dataseed2.defibit.io',
      'https://bsc-dataseed3.defibit.io',
      'https://bsc-dataseed4.defibit.io',
      'https://bsc-dataseed1.ninicoin.io',
      'https://bsc-dataseed2.ninicoin.io',
      'https://bsc-dataseed3.ninicoin.io',
      'https://bsc-dataseed4.ninicoin.io',
      'wss://bsc-ws-node.nariox.org',
    ],
    blockExplorerUrls: ['https://bscscan.com'],
  },
  {
    chainId: Chains.POLYGON,
    chainName: 'Polygon Mainnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://polygon-rpc.com/'],
    blockExplorerUrls: ['https://polygonscan.com/'],
  },
  {
    chainId: Chains.RINKEBY,
    chainName: 'Rinkeby Test Network',
    nativeCurrency: {
      name: 'Rinkeby Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://rinkeby-light.eth.linkpool.io/'],
    blockExplorerUrls: ['https://rinkeby.etherscan.io/'],
  },
  {
    chainId: Chains.MUMBAI,
    chainName: 'Polygon Mumbai Testnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
  },
]
