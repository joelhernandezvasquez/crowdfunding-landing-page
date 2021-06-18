import { useReducer } from "react";
import BackedStatsContext from "./BackedStatsContext";
import BackedStatsReducer from './BackedStatsReducer';

const BackedStatsState = (props) =>{

    const initialState = {
        totalMoney:0,
        totalBackers:0,
    }

    const [state,dispatch] = useReducer(BackedStatsReducer,initialState);

    // addMoney

     const addMoney = (amount) =>{
       
       dispatch({type:'ADD_MONEY', payload:amount});
     }
   
     // add backers

    


    return <BackedStatsContext.Provider
          value={{
              totalMoney: state.totalMoney,
              totalBackers: state.totalBackers,
              addMoney
          }}
    >
         {props.children}   
        </BackedStatsContext.Provider>

}

export default BackedStatsState;
