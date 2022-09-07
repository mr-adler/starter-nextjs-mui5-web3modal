import web3Modal from 'utils/web3modal'
import { ethersProvider } from 'services/providers'
import { AppDispatch } from 'store/store'
import { userSlice } from 'store/reducers/user/slice'
import { ethers } from 'ethers'
import { contractAccountApi } from 'services/api/contract/account'
import { enqueueSnack } from '../snackbar/actions'
import { safeWindow } from 'utils/safeWindow'
import { transformTextToWithDots } from 'utils/transformTextToWithDots'
import { getChainName } from 'utils/getChainName'

export const tryDisconnectWeb3 = () => async (dispatch: AppDispatch) => {
  web3Modal?.clearCachedProvider()

  dispatch(userSlice.actions.clearUserData())

  ethersProvider.setProvider(null)

  const tempProvider = ethersProvider.getTempProvider()
  tempProvider?.removeAllListeners()
}

export const initProvider =
  (web3Provider: any) => async (dispatch: AppDispatch) => {
    const provider = new ethers.providers.Web3Provider(web3Provider)

    ethersProvider.setProvider(provider)
    ethersProvider.setTempProvider(web3Provider)

    const userAddress = await contractAccountApi.getAccount()
    const userChainId = await contractAccountApi.getChainId()

    dispatch(userSlice.actions.setUserAddress(userAddress || ''))
    dispatch(userSlice.actions.setUserChainId(userChainId))

    web3Provider.on('accountsChanged', async (data: any) => {
      if (!data[0]) {
        dispatch(tryDisconnectWeb3())
        return
      }

      const userAddress = await contractAccountApi.getAccount()

      dispatch(userSlice.actions.setUserAddress(userAddress || ''))
      dispatch(
        enqueueSnack({
          message: `Address changed to ${transformTextToWithDots(userAddress)}`,
          variant: 'info',
          id: 2,
        })
      )
    })

    web3Provider.on('chainChanged', async () => {
      ethersProvider.setProvider(
        new ethers.providers.Web3Provider(web3Provider)
      )

      dispatch(tryAuth())

      const userChainId = await contractAccountApi.getChainId()
      dispatch(userSlice.actions.setUserChainId(userChainId))

      dispatch(
        enqueueSnack({
          message: `Chain Changed to ${getChainName(userChainId)}`,
          variant: 'info',
          id: 1,
        })
      )
    })

    web3Provider.on('disconnect', async (_: number, reason: string) => {
      console.log(reason)
      dispatch(tryDisconnectWeb3())
    })

    dispatch(userSlice.actions.setIsLoadingUserAuth(false))
  }

export const disconnect = () => async (dispatch: AppDispatch) => {
  const provider = ethersProvider.getProvider()

  if ((provider?.provider as any).disconnect) {
    ;(provider?.provider as any).disconnect()
  } else {
    dispatch(tryDisconnectWeb3())
  }

  dispatch(enqueueSnack({ message: 'Disconnected', variant: 'info' }))
}

export const initConnectToWeb3 = () => async (dispatch: AppDispatch) => {
  try {
    const web3Provider = await web3Modal?.connect()

    await dispatch(initProvider(web3Provider))
  } catch (e) {
    dispatch(userSlice.actions.setIsLoadingUserAuth(false))
    console.error(e)
  }
}

export const tryConnectToWeb3 = () => async (dispatch: AppDispatch) => {
  try {
    if (typeof safeWindow.ethereum === 'undefined') {
      dispatch(
        enqueueSnack({ message: 'Please install MetaMask', variant: 'warning' })
      )

      return
    }

    dispatch(tryDisconnectWeb3())

    const web3Provider = await web3Modal?.connect()

    await dispatch(initProvider(web3Provider))
  } catch (e) {
    console.error(e)
    dispatch(
      enqueueSnack({ message: 'Please open metamask', variant: 'warning' })
    )
  }
}

export const tryAuth = () => async (dispatch: AppDispatch) => {
  if (web3Modal?.cachedProvider) {
    dispatch(initConnectToWeb3())
  } else {
    dispatch(userSlice.actions.setIsLoadingUserAuth(false))
  }
}
