import * as IconsList from 'assets/icons'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useSnackbar } from 'notistack'

export default {
  title: 'Assets/Icons',
}

const styles = {
  container: {
    p: 3,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  title: {
    mb: 2,
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: 2,
    flexDirection: 'column',
    gap: 1,
    cursor: 'pointer',

    svg: {
      width: 24,
      height: 24,
    },
  },
}

export const Icons = () => {
  const { enqueueSnackbar } = useSnackbar()

  const getName = (name: string | undefined): string => {
    if (!name) {
      return ''
    }

    return `${name.replace('Svg', '')}Icon`
  }

  const getPath = (icon: string | undefined): string => {
    if (!icon) {
      return ''
    }

    return `import { ${icon} } from 'assets/icons'`
  }

  const copyToClipboard = (icon: string | undefined) => {
    navigator.clipboard.writeText(getPath(getName(icon)))
    enqueueSnackbar(`Copied:  ${getPath(getName(icon))}`, {
      variant: 'info',
    })
  }

  return (
    <>
      <Typography variant={'subtitle1'} sx={styles.title}>
        You can click to copy icon path!
      </Typography>
      <Box sx={styles.container}>
        {Object.values(IconsList).map((item, idx) => {
          const Item = item

          return (
            <Box
              key={idx}
              sx={styles.iconContainer}
              onClick={() => {
                copyToClipboard(item?.name)
              }}
            >
              <Item />
              <Typography variant={'subtitle2'}>
                {getName(item?.name)}
              </Typography>
            </Box>
          )
        })}
      </Box>
    </>
  )
}
