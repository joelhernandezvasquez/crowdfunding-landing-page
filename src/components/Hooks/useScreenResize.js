
import { useState,useEffect } from "react";

const useScreenResize = () =>{
   
     const [screenWidth,setScreenWidth] = useState(window.innerWidth);

     useEffect(()=>{
       window.addEventListener("resize",()=>{
           setScreenWidth(window.innerWidth);
       })
     },[])
     // eslint-disable-next-line

     
     return screenWidth;

}
export default useScreenResize;