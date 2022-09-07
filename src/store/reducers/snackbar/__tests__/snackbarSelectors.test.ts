import {
  snackbarAutoHideDurationSelector,
  snackbarIdSelector,
  snackbarInfoSelector,
  snackbarMessageSelector,
  snackbarVariantSelector,
} from 'store/reducers/snackbar/selectors'
import { RootState } from 'store/store'

describe('redux - snackbarSelectors', () => {
  const mockSnackbar = {
    message: 'test',
    variant: 'default',
    id: '0',
    autoHideDuration: 3000,
  }

  const mockStore = {
    snackbar: mockSnackbar,
  }

  test('should select snackbar info', () => {
    expect(snackbarInfoSelector(mockStore as RootState)).toEqual(mockSnackbar)
  })

  test('should select message', () => {
    expect(snackbarMessageSelector(mockStore as RootState)).toBe(
      mockSnackbar.message
    )
  })

  test('should select snackbar variant', () => {
    expect(snackbarVariantSelector(mockStore as RootState)).toBe(
      mockSnackbar.variant
    )
  })

  test('should select snackbar id', () => {
    expect(snackbarIdSelector(mockStore as RootState)).toBe(mockSnackbar.id)
  })

  test('should select autoHideDuration', () => {
    expect(snackbarAutoHideDurationSelector(mockStore as RootState)).toBe(
      mockSnackbar.autoHideDuration
    )
  })
})
