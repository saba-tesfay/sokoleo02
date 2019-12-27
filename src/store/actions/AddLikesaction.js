export const addLike = (likedProuductId) =>  
 {
     return(dispatch,getState ,{ getFirebase,getFirestore})=>{        
        const firestore=getFirestore();
        const profile=getState().firebase.profile;
        console.log('profile',profile)
        const authorId=getState().firebase.auth.uid;
        firestore.collection('like').add({
            fristName:profile.name,
            userId:authorId,
            likedProuductId,
            createdAt:new Date()  
 
        }).then(()=>{
            dispatch({type:'ADD-LIKE',likedProuductId})
        }).catch((err)=>{
            dispatch({type:'ADD-LIKE-ERROR',err});
        })
     }
 }
 