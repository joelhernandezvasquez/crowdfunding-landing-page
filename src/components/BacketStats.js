import React from 'react';
import ProgressBar from './ProgressBar';


const BacketStats =  () => {
    return (
        <section className="backed-stats-section container box">
           <div className="backed-box">
                {/* // here goes a piece of state */}
               <h1 className="header">$89,914</h1>
               <p className="text">of $100,000 backed</p>
           </div>

            <div className="line"></div>

           <div className="backed-box">
                 {/* // here goes a piece of state */}
               <h1 className="header">5,007</h1>
               <p className="text">total backers</p>
            </div>

             <div className="line"></div>
             
           <div className="backed-box">
                 {/* // here goes a piece of state */}
                 <h1 className="header">56</h1>
               <p className="text">days left</p>
           </div>
          
           <ProgressBar/>

        </section>
    )
}

export default BacketStats;
