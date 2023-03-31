import React ,{useState,useEffect} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box, Stack, Typography} from '@mui/material'
import ExerciseCard from './ExerciseCard'
// import {exercisesOptions, fetchData} from '../utiles/FetchData'
const Exercises = ({exercises,setExercises,bodyPart}) => {
  if (!exercises){
    setExercises("No Match Found")
  }
  console.log(exercises);
  return (
<Box id="exercises"
sx={{mt : {lg : '110px'}}}
mt='50px'
p='20px'
>
<Typography variant='h3' mb='46px'>
  Showing Results
</Typography>
<Stack direction='row' sx={{gap: {lg : '110px',xs : '50px'}}}
flexWrap='wrap' justifyContent='center'>
{
  exercises.map((exercise,index)=>(
   <ExerciseCard key={index} exercise={exercise}/>
  ))
}
</Stack>
</Box>
  )
}

export default Exercises
