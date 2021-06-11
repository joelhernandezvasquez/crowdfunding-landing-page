import React from 'react';

const  ProgressBar = () => {
    return (
        <div className="progress-bar-container">
           
           {/* // PROGRESS BAR WILL BE FILLING UP FROM THE TOTAL MONEY PIECE OF STATE  */}
         {/*   // formulta to calculate the widht of the progress bar will be current total money / money goal 
           and multilpy by 100
           for example: ($89,914 / $100,000) * 100. The result will be the width of the progress bar. */}
           <div className="progress-bar"></div>
        </div>
    )
}

export default ProgressBar;
