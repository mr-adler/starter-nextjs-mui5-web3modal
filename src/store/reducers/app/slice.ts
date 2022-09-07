import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IApp } from 'models/store/IApp'
import { RefetchFlags } from 'constants/refetchFlags'

export const initialState: IApp = {
  isLoading: false,
  refetchFlags: {
    [RefetchFlags.Main]: false,
  },
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppLoading(state, action: PayloadAction<boolean | undefined>) {
      if (typeof action.payload === 'undefined') {
        state.isLoading = !state.isLoading
      } else {
        state.isLoading = action.payload
      }
    },

    setRefetchFlag(state, action: PayloadAction<RefetchFlags>) {
      state.refetchFlags = {
        ...state.refetchFlags,
        [action.payload]: !state.refetchFlags[action.payload],
      }
    },
  },
})

export default appSlice.reducer
