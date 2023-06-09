import {React ,useContext}from 'react'
import {Box , Typography} from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/assets/icons/left-arrow.png';
import 'react-horizontal-scrolling-menu/dist/styles.css';

// let LeftArrow = () => {
//     let  {scrollPrev } = useContext(VisibilityContext);
//     return (
//       <Typography onClick={() => scrollPrev ()} className="right-arrow">
//         <img src={LeftArrowIcon} alt="right-arrow" />
//       </Typography>
//     )}
//   let RightArrow = () => {
//     let  {scrollNext}  = useContext(VisibilityContext);
//     return (
//       <Typography onClick={() => scrollNext()} className="left-arrow">
//         <img src={RightArrowIcon} alt="right-arrow" />
//       </Typography>
      
//     );
//   };
  
 const HorizontalScrollbar = ({data,bodyPart,setBodyPart}) => {
  return (
<ScrollMenu 
>
   {
        data.map((item)=>
        <Box key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m='0 40px'
        >
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart ={setBodyPart}/>
        </Box>
        
        )}
</ScrollMenu>
  )
}
export default HorizontalScrollbar
