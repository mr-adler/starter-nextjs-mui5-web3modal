import { useEffect } from 'react'
import { useAppSelector } from 'store/hooks/redux'
import {
  snackbarAutoHideDurationSelector,
  snackbarIdSelector,
  snackbarMessageSelector,
  snackbarVariantSelector,
} from 'store/reducers/snackbar/selectors'
import { useSnackbar } from 'notistack'

export const Notifier = () => {
  const { enqueueSnackbar } = useSnackbar()

  const snackbarMessage = useAppSelector(snackbarMessageSelector)
  const snackbarVariant = useAppSelector(snackbarVariantSelector)
  const snackbarId = useAppSelector(snackbarIdSelector)
  const snackbarAutoHideDuration = useAppSelector(
    snackbarAutoHideDurationSelector
  )

  useEffect(() => {
    if (!!snackbarMessage) {
      enqueueSnackbar(snackbarMessage, {
        variant: snackbarVariant,
        autoHideDuration: snackbarAutoHideDuration,
      })
    }
  }, [snackbarId])

  return <></>
}
