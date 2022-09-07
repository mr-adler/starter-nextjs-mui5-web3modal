import { IUserState } from 'models/store/IUser'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialState: IUserState = {
  address: '',
  chainId: null,
  isLoading: true,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAddress(state, action: PayloadAction<string>) {
      state.address = !!action.payload ? action.payload : ''
    },
    setUserChainId(state, action: PayloadAction<number | null>) {
      state.chainId = action.payload
    },
    setIsLoadingUserAuth(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    clearUserData(state) {
      state.address = ''
      state.chainId = null
    },
  },
})

export default userSlice.reducer
