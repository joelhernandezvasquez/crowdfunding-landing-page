import React,{useContext} from 'react';
import BackedStatsContext from '../ContextApi/Backed/BackedStatsContext';

const  ProgressBar = (props) => {
  
  const backedContext = useContext(BackedStatsContext);
  const getStyle =() => {
   const w = (backedContext.totalMoney / 100000) * 100;
   console.log(w);
    return{
      width:`${w}%`
   }
  }
  
  return (
        <div className="progress-bar-container">
           
           {/* // PROGRESS BAR WILL BE FILLING UP FROM THE TOTAL MONEY PIECE OF STATE  */}
         {/*   // formulta to calculate the widht of the progress bar will be current total money / money goal 
           and multilpy by 100
           for example: ($89,914 / $100,000) * 100. The result will be the width of the progress bar. */}
           <div className="progress-bar" style={getStyle()}></div>
        </div>
    )
}

export default ProgressBar;
