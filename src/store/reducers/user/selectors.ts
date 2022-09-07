import { RootState } from '../../store'
import { createSelector } from 'reselect'

export const userInfoSelector = (state: RootState) => state.user

export const userAddressSelector = (state: RootState) =>
  userInfoSelector(state).address

export const userChainIdSelector = (state: RootState) =>
  userInfoSelector(state).chainId

export const isLoadingUserAuthSelector = (state: RootState) =>
  userInfoSelector(state).isLoading

export const isUserLoggedSelector = createSelector(
  (state: RootState) => userAddressSelector(state),
  (state: RootState) => userChainIdSelector(state),
  (userAddress, userChainId) => !!userAddress && !!userChainId
)
