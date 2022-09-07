import { useQuery } from 'react-query'
import { UseQueryOptions } from 'react-query/types/react/types'
import { useAppSelector } from 'store/hooks/redux'
import { userAddressSelector } from 'store/reducers/user/selectors'
import { contractAccountApi } from 'services/api/contract/account'
import { isRefetchedMainFlagSelector } from 'store/reducers/app/selectors'

export const useGetBalance = (
  cacheKeysBalance: string,
  isValidChain: boolean,
  tokenAddress: string | undefined,
  options: UseQueryOptions = {}
) => {
  const userAddress = useAppSelector(userAddressSelector)
  const isRefetchedMainFlag = useAppSelector(isRefetchedMainFlagSelector)

  return useQuery<number>(
    [cacheKeysBalance, userAddress, isRefetchedMainFlag],
    async () =>
      await contractAccountApi.getTokenBalance(
        userAddress as string,
        tokenAddress as string
      ),
    {
      enabled: !!userAddress && !!tokenAddress && isValidChain,
      ...(options as any),
    }
  )
}
