

export default (state,action) => {
    switch(action.type)
    {
        
        case 'ADD_MONEY':
      
        return{
           ...state,
           totalMoney:state.totalMoney + action.payload
          
        }

        default:
            return state;
    }
}

