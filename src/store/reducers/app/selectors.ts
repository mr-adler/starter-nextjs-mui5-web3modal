import { RootState } from '../../store'
import { RefetchFlags } from 'constants/refetchFlags'

export const appSelector = (state: RootState) => state.app

export const isLoadingSelector = (state: RootState) =>
  appSelector(state).isLoading

export const isRefetchedMainFlagSelector = (state: RootState) =>
  appSelector(state).refetchFlags[RefetchFlags.Main]
