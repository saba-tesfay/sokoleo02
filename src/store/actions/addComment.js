export const addComment = (comment) =>  
 {
     return(dispatch,getState ,{ getFirebase,getFirestore})=>{
        
        const firestore=getFirestore();
        const profile=getState().firebase.profile;
        const authorId=getState().firebase.auth.uid;
        firestore.collection('comments').add({
            fristName:profile.name,
            userId:authorId,
            ...comment,
            createdAt:new Date()  
 
        }).then(()=>{
            dispatch({type:'ADD-COMMENT',comment})
        }).catch((err)=>{
            dispatch({type:'ADD-COMMENT-ERROR',err});
        })
     }
 }