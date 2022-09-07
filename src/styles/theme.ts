import { createTheme, Theme } from '@mui/material/styles'

import { primaryMain } from './colors'

import { getOverridesComponent } from './overridesComponent'
import { getTypography } from './typography'

export const createCustomTheme = (): Theme => {
  const baseTheme = createTheme({
    spacing: (x: number) => `${x * 8}px`,
    palette: {
      primary: {
        main: primaryMain,
      },
    },
  })

  return createTheme({
    ...baseTheme,
    components: getOverridesComponent(baseTheme),
    typography: getTypography(baseTheme),
  })
}

export default createCustomTheme()
