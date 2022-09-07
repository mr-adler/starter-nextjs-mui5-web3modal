import { RootState } from '../../store'

export const snackbarInfoSelector = (state: RootState) => state.snackbar

export const snackbarMessageSelector = (state: RootState) =>
  snackbarInfoSelector(state).message

export const snackbarVariantSelector = (state: RootState) =>
  snackbarInfoSelector(state).variant

export const snackbarIdSelector = (state: RootState) =>
  snackbarInfoSelector(state).id

export const snackbarAutoHideDurationSelector = (state: RootState) =>
  snackbarInfoSelector(state).autoHideDuration
