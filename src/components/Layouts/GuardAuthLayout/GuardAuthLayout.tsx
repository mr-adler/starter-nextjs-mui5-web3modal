import { FC, ReactNode } from 'react'
import { makeStyles } from 'styles/makeStyles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { ConnectButton } from 'components/ConnectButton'
import { useAppSelector } from 'store/hooks/redux'
import {
  isLoadingUserAuthSelector,
  isUserLoggedSelector,
} from 'store/reducers/user/selectors'

const useStyles = makeStyles({ name: 'GuardAuthLayout' })(() => ({
  root: {},
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100vh',
  },
}))

type Props = {
  children: ReactNode
}

export const GuardAuthLayout: FC<Props> = ({ children }) => {
  const { classes } = useStyles()

  const isUserLogged = useAppSelector(isUserLoggedSelector)
  const isLoadingUserAuth = useAppSelector(isLoadingUserAuthSelector)

  if (isUserLogged || isLoadingUserAuth) {
    return <>{children}</>
  }

  return (
    <Container maxWidth={'lg'} className={classes.root}>
      <div className={classes.content}>
        <Typography variant={'h4'} mb={3}>
          Your wallet is not connected, please unlock to continue
        </Typography>
        <ConnectButton />
      </div>
    </Container>
  )
}
