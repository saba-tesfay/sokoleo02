import * as types from './chatActionType'
let nextMessageId = 0
export const addMessage = (message, author) => {
    return(dispatch,getState ,{ getFirebase,getFirestore})=>{
        const firestore=getFirestore();
        firestore.collection('chatMessage').add({
            ...message,
            createdAt:new Date()
  
        }).then(()=>{
            dispatch({
                type: types.ADD_MESSAGE,
                id: nextMessageId++,
                message,
                author
              })
        }).catch((err)=>{
            dispatch({type:'ADD-MESSAGE-ERROR',err});
        })
     }

}