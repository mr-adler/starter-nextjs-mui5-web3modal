import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export const Main = () => {
  return (
    <Container maxWidth={'lg'}>
      <Box mt={4} textAlign={'center'}>
        <Typography variant={'h1'}>Hello my friend!</Typography>
      </Box>
    </Container>
  )
}
