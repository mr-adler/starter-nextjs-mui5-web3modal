import { ComponentProps, FC, memo } from 'react'
import { makeStyles } from 'styles/makeStyles'
import Button from '@mui/material/Button'
import { tryConnectToWeb3 } from 'store/reducers/user/actions'
import { useAppDispatch, useAppSelector } from 'store/hooks/redux'
import { isUserLoggedSelector } from 'store/reducers/user/selectors'

const useStyles = makeStyles({ name: 'ConnectButton' })(() => ({}))

type Props = ComponentProps<typeof Button> & {
  className?: string
  caption?: string
  variant?: 'text' | 'outlined' | 'contained'
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
}

const ConnectButtonComponent: FC<Props> = ({
  className,
  caption = 'Connect your wallet',
  variant = 'contained',
  color = 'primary',
  ...rest
}) => {
  const { cx } = useStyles()

  const dispatch = useAppDispatch()

  const isUserLogged = useAppSelector(isUserLoggedSelector)

  const onConnectButtonClick = () => {
    dispatch(tryConnectToWeb3())
  }

  if (isUserLogged) {
    return null
  }

  return (
    <Button
      className={cx(className)}
      variant={variant}
      size={'medium'}
      color={color}
      onClick={() => {
        onConnectButtonClick()
      }}
      {...rest}
    >
      {caption}
    </Button>
  )
}

export const ConnectButton = memo(ConnectButtonComponent)
