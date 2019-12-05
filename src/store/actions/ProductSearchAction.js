import { firestore } from "firebase";

export const ProductSearch=(res)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        getState.firestore.get({ collection: 'sellerupload' })
        
    }
    }
    