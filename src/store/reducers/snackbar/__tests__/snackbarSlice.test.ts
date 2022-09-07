import reducer, {
  snackbarSlice,
  initialState,
} from 'store/reducers/snackbar/slice'
import { ISnackbar } from 'models/store/ISnackbar'

describe('redux - snackbarSlice', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState)
  })

  test('should handle change enqueueSnack', () => {
    const mock: ISnackbar = {
      message: 'Test',
      variant: 'default',
      id: '1',
      autoHideDuration: 5000,
    }

    expect(
      reducer(initialState, snackbarSlice.actions.enqueueSnack(mock))
    ).toEqual(mock)
  })
})
