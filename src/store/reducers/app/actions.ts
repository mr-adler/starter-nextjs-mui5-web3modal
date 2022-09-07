import { AppDispatch } from '../../store'
import { appSlice } from './slice'
import { RefetchFlags } from 'constants/refetchFlags'

export const setAppLoading =
  (flag: boolean | undefined) => async (dispatch: AppDispatch) => {
    dispatch(appSlice.actions.setAppLoading(flag))
  }

export const setRefetchFlag =
  (flagName: RefetchFlags) => async (dispatch: AppDispatch) => {
    dispatch(appSlice.actions.setRefetchFlag(flagName))
  }
