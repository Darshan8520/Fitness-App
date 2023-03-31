import React from 'react'
import HeroBannerImage from '../assets/assets/images/banner.png'
import {Box, Stack , Typography , Button} from '@mui/material'
const HeroBanner = () => {
  return (
<>
<Box sx={{mt:{lg :'200px',xs: '80px'}, ml:{sm:'60px'}}} position='relative' p='20px'>
 <Typography color='#FF2625'fontWeight='600' fontSize='26px'>
  Fitness Club
  </Typography> 
  <Typography fontWeight={700} sx ={{fontSize:{lg :'55px' , xs :'40px'}}} mb='33px' mt='50px'>
    Sweat , Smile <br/> And Repeat
  </Typography>
  <Typography fontSize='22px'lineHeight='35px'mb={4}>
    Check out the most effective exercises
  </Typography>
  <Button variant='contained' color='error' href='#exercises' sx={{backgroundColor:'#FF2625', padding :'10px'}}>Explore Exercises</Button>
  <Typography
  fontWeight={600}
  color ='#FF2625'
  sx={{
    opacity :0.1,
    display : { lg : 'block' , xs : 'none'}
  }}
  fontSize='200px'
  >
    Exercise
  </Typography>
  <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
</Box>
</>
  )
}

export default HeroBanner
