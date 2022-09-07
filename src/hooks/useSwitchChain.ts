import { useMemo } from 'react'
import { useAppDispatch } from 'store/hooks/redux'
import { SwitchableNetworks } from 'constants/switchableNetworks'
import { ISwitchableNetwork } from 'models/ISwitchableNetwork'
import { switchNetwork } from 'utils/switchNetwork'
import { enqueueSnack } from 'store/reducers/snackbar/actions'
import { isServer } from 'utils/isServer'
import { safeWindow } from 'utils/safeWindow'
import { localStorageKeys } from 'constants/localStorageKeys'

export const useSwitchChain = (validChainId: number | undefined) => {
  const dispatch = useAppDispatch()

  const switchableNetwork = useMemo(() => {
    return SwitchableNetworks.find(
      (network: ISwitchableNetwork) => network.chainId === validChainId
    )
  }, [validChainId])

  const switchChain = () => {
    if (
      !isServer &&
      safeWindow.localStorage.getItem(localStorageKeys.web3) !== '"injected"'
    ) {
      dispatch(
        enqueueSnack({
          message: "Your provider doesn't allow this operation!",
          variant: 'warning',
        })
      )
      return
    }

    if (switchableNetwork) {
      switchNetwork(switchableNetwork)
    } else {
      dispatch(
        enqueueSnack({ message: 'Network is not support!', variant: 'error' })
      )
    }
  }

  return [switchChain]
}
