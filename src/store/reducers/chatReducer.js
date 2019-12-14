const err=null;
const chatReducer=(state=[],action)=>{
    switch(action.type){
        case 'ADD-MESSAGE':
            return {
                ...state,
            }
         case 'ADD-MESSAGE-ERR':
             return{
                 

            }
        default:
            return state;

    }
return state
}
export default chatReducer;