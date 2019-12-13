import productReducer from './ProductReducer';
import authReducer from './authReducer'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore';
import {combineReducers} from 'redux';
 
import commentReducer from './commentReducer'
import  {messagesReducer,usersReducer} from './chatReducer'

const rootReducer=combineReducers({
    message:messagesReducer,
    user:usersReducer,
    comment:commentReducer,
 
import "firebase/storage";
const rootReducer=combineReducers({
     auth:authReducer,
 
    products:productReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
  
});
export default rootReducer;
