import Web3Modal from 'web3modal'
import { isServer } from './isServer'
import WalletConnectProvider from '@walletconnect/web3-provider'
import theme from 'styles/theme'

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: '46315a93037d47818abb496cf12952f2', // required
    },
  },
}

const web3Modal = isServer
  ? null
  : new Web3Modal({
      cacheProvider: true,
      providerOptions: providerOptions,
      theme: {
        background: theme.palette.grey['A100'],
        main: theme.palette.text.primary,
        secondary: theme.palette.text.secondary,
        border: 'none',
        hover: theme.palette.grey[900],
      },
    })

export default web3Modal
