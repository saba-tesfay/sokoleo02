 
export const addChatMessage = (message) =>  
 {
     return(dispatch,getState ,{ getFirebase,getFirestore})=>{
        const firestore=getFirestore();
        firestore.collection('chat').add({
            ...message, 
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:'ADD-MESSAGE',message})
        }).catch((err)=>{
            dispatch({type:'ADD-MESSAGE-ERROR',err});
        })
        

     }
 }
