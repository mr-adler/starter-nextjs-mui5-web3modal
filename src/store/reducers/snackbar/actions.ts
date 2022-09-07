import { AppDispatch } from 'store/store'
import { ISnackbar } from 'models/store/ISnackbar'
import { snackbarSlice } from 'store/reducers/snackbar/slice'

export const enqueueSnack =
  (data: ISnackbar) => async (dispatch: AppDispatch) => {
    dispatch(snackbarSlice.actions.enqueueSnack({ ...data }))
  }
