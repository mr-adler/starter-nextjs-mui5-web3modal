import { fontRoboto } from './fonts'
import { Theme } from '@mui/material/styles'

export const getTypography = (baseTheme: Theme): any => {
  return {
    fontFamily: fontRoboto,
    h1: {
      fontSize: 100,
      lineHeight: 1.5,
      fontWeight: 700,

      [baseTheme.breakpoints.down('md')]: {
        fontSize: 40,
      },
    },
  }
}
