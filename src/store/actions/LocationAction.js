export const location=(location)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore=getFirestore();
        console.log("reduxpart",location)
        firestore.collection('sellerLocation').add({
            ...location,
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:'SELLERLOCATION',location});
        }).catch((err)=>{
            dispatch({type:'SELLERLOCATION_ERROR',err});
        })
       
    }
};
