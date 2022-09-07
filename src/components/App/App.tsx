import { FC, ReactNode, useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import NextNProgress from 'nextjs-progressbar'
import theme from 'styles/theme'
import { primaryMain } from 'styles/colors'
import { useAppDispatch } from 'store/hooks/redux'
import { tryAuth } from 'store/reducers/user/actions'
import { Notifier } from 'components/Notifier'

type Props = {
  children: ReactNode
}

export const App: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(tryAuth())
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NextNProgress height={2} color={primaryMain} />
      <>
        {children}
        <Notifier />
      </>
    </ThemeProvider>
  )
}
