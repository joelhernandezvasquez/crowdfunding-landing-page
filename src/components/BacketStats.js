import React,{useContext} from 'react';
import ProgressBar from './ProgressBar';
import BackedStatsContext from '../ContextApi/Backed/BackedStatsContext';


const BacketStats =  () => {
    
  const backedStatsContext = useContext(BackedStatsContext);

  //console.log(backedStatsContext.totalMoney);
  return (
        <section className="backed-stats-section container box">
           <div className="backed-box">
                {/* // here goes a piece of state */}
               
               <h1 className="header">{backedStatsContext.totalMoney}</h1>
               <p className="text">of $100,000 backed</p>
           </div>

            <div className="line"></div>

           <div className="backed-box">
                 {/* // here goes a piece of state */}
               <h1 className="header">{backedStatsContext.totalBackers}</h1>
               <p className="text">total backers</p>
            </div>

             <div className="line"></div>
             
           <div className="backed-box">
                 {/* // here goes a piece of state */}
                 <h1 className="header">60</h1>
               <p className="text">days left</p>
           </div>
          
           <ProgressBar/>

        </section>
    )
}

export default BacketStats;
