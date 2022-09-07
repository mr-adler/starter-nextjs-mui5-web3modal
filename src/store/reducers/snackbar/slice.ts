import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISnackbar } from 'models/store/ISnackbar'
import _uniqueId from 'lodash/uniqueId'

export const initialState: ISnackbar = {
  message: '',
  variant: 'default',
  id: '',
  autoHideDuration: 2000,
}

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    enqueueSnack(state, action: PayloadAction<ISnackbar>) {
      state.message = action.payload.message
      state.variant = action.payload.variant
      state.id = action.payload?.id || _uniqueId('snackbar')
      state.autoHideDuration = action.payload?.autoHideDuration || 2000
    },
  },
})

export default snackbarSlice.reducer
