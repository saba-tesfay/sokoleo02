 import * as types from '../actions/chatActionType'
export const messagesReducer=(state=[],action)=>
{
    switch (action.type) {
        case 'ADD_MESSAGE':
        case 'MESSAGE_RECEIVED':
          return state.concat([
            {
              message: action.message,
              author: action.author,
              id: action.id
            }
          ])
        case 'ADD_MESSAGE_ERROR':
          console.log("error message on adding message");

        default:
          return state
      }
 
}
export const usersReducer=(state=[],action)=>{
    switch (action.type) {
        case types.ADD_USER:
          return state.concat([
            {
             name:action.name,
             id:action.id
            }
          ])
          case types.USER_LIST:
              return action.users
        default:
          return state
      }
}
 