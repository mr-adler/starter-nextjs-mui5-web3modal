import { fontRoboto } from './fonts'
import { Components, Theme } from '@mui/material/styles'

export const getOverridesComponent = (baseTheme: Theme): Components => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: 16,
          lineHeight: 1.5,
        },
        body: {
          fontFamily: fontRoboto,
          boxSizing: 'border-box',
          height: '100%',
          margin: 0,
          padding: 0,
          color: baseTheme.palette.primary.main,
        },
      },
    },
  }
}
