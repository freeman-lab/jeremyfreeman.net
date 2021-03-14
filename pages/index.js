import { Box, Link } from 'theme-ui'

const Index = () => {
  return <Box sx={{px: [4], py: [4]}}>
    <Box sx={{fontSize: [5]}}>homepage</Box>
    <Link sx={{fontSize: [3]}} href='/blog'>blog</Link>
  </Box>
}

export default Index