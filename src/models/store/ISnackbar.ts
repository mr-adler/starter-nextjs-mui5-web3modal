import { VariantType } from 'notistack'

export interface ISnackbar {
  message: string
  variant: VariantType
  id?: string | number
  autoHideDuration?: number
}
