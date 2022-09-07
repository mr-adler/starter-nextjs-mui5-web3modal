import { safeWindow } from './safeWindow'
import { ISwitchableNetwork } from 'models/ISwitchableNetwork'

export const switchNetwork = async (
  network: ISwitchableNetwork | undefined
) => {
  if (!network) {
    return
  }
  // Check if MetaMask is installed
  // MetaMask injects the global API into window.ethereum
  if (safeWindow.ethereum) {
    try {
      // check if the chain to connect to is installed
      await safeWindow.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x' + network.chainId.toString(16) }], // chainId must be in hexadecimal numbers
      })
    } catch (error: any) {
      // This error code indicates that the chain has not been added to MetaMask
      // if it is not, then install it into the user MetaMask
      if (error.code === 4902) {
        try {
          await safeWindow.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                ...network,
                chainId: '0x' + network.chainId.toString(16),
              },
            ],
          })
        } catch (addError) {
          console.error(addError)
        }
      }
      console.error(error)
    }
  } else {
    // if no window.ethereum then MetaMask is not installed
    alert(
      'MetaMask is not installed. Please consider installing it: https://metamask.io/download.html'
    )
  }
}
