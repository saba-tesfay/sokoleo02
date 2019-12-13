export const addComment = (comment) =>  
 {
     return(dispatch,getState ,{ getFirebase,getFirestore})=>{
        const firestore=getFirestore();
        firestore.collection('haha').add({
            ...comment,
            msg:''
  
        }).then(()=>{
            dispatch({type:'ADD-COMMENT',comment})
        }).catch((err)=>{
            dispatch({type:'ADD-COMMENT-ERROR',err});
        })
        

     }
 }