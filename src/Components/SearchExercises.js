import {React ,useState,useEffect}from 'react'
import {Box, Stack , Button , TextField , Typography} from '@mui/material'
import {exercisesOptions,fetchData} from '../utiles/FetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

let SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  let [search,setSearch]= useState('')
  let [bodyParts,setBodyParts]=useState([])

 useEffect(()=>{
   const fetchExercisesData = async ()=>{
    const bodyPartData = await fetchData ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exercisesOptions)
    // .catch(error=>console.log(error))
    setBodyParts (['all',...bodyPartData])
   }
   fetchExercisesData( )
 },[])
  const handleSearch = async()=>{
    if (search){
     let exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises'
     ,exercisesOptions)
    //  .catch(error=> console.log(error))
      const searchedExercises =
         exercisesData.filter((item)=>
          item.name && (item.name.includes(search))
          || item.target && (item.target.includes(search))
          || item.equipmenet&& (item.equipmenet.includes(search))
          || item.bodyPart&& (item.bodyPart.includes(search))
         )
      setSearch('')
      setExercises (searchedExercises)
    }
  }
  return (
  <Stack alignItems='center' mt='37px'justifyContent='center' p='20px'>
    <Typography fontWeight={700} sx={{fontSize :{lg :'44px', xs:'30px'}}} mb='50px' textAlign='center'>
      Awesome Exercises You <br/> Should Know...
    </Typography>
    <Box position='relative' mb='72px'>
   <TextField  sx={{
    input : {
     fontWeight : '700',
     border : 'none',
     borderRadius : '4px'
    },
    width : {lg : '900px', xs: '350px'},
    backgroundColor : "whitesmoke",
    borderRadius : '40px'
   }}
   height ='76px'
   value ={search}
   onChange ={(e)=>setSearch(e.target.value.toLowerCase())}
   placeholder='Search Exercises..'
   type='text'
   />
   <Button className='search-btn'
   sx={{
    bgcolor : '#FF2625',
    color : "white",
    textTransform :'none',
    width : {
      lg : '175px' , xs : '80px'
    },
    fontSize : {lg:'20px', xs :'14px'},
    height : '56px',
    position: 'absolute',
    right :'0'
   }}
   onClick={handleSearch}
   >Search
   </Button>
    </Box>
    <Box sx ={{position: 'relative', width :'100%', p: '20px'}}>
    <HorizontalScrollbar data ={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </Box>
  </Stack>
  )
}

export default SearchExercises
