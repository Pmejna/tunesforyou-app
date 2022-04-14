import { Box } from '@chakra-ui/layout'
import GradientLayout from '../components/gradientLayout'

const Home = () => {
  return (
    <GradientLayout 
      color="blackAlpha"
      subtitle='profile'
      title='Tunes for you'
      description='16 public playlists'
    >
      <Box>Home Page</Box>
    </GradientLayout>
  )
}

export default Home
