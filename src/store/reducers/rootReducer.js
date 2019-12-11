import productReducer from './ProductReducer';
<<<<<<< HEAD
import {firestoreReducer} from 'redux-firestore';
=======
import authReducer from './authReducer'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
>>>>>>> master
import {combineReducers} from 'redux';
import "firebase/storage";
const rootReducer=combineReducers({
<<<<<<< HEAD
    products:productReducer,
    firestore:firestoreReducer
=======
    auth:authReducer,
    products:productReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
 
  
>>>>>>> master
});
export default rootReducer;
