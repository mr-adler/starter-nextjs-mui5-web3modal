import { useMemo } from 'react'
import { useAppSelector } from 'store/hooks/redux'
import { userChainIdSelector } from 'store/reducers/user/selectors'

export const useIsValidChainId = (
  validChainId: number | undefined
): [boolean] => {
  const chainId = useAppSelector(userChainIdSelector)

  const isValidChainId = useMemo(() => {
    return chainId === validChainId
  }, [chainId, validChainId])

  return [isValidChainId]
}
