import productReducer from './ProductReducer';
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
import {combineReducers} from 'redux';
import commentReducer from './commentReducer'
import  {messagesReducer,usersReducer} from './chatReducer'

const rootReducer=combineReducers({
    message:messagesReducer,
    user:usersReducer,
    comment:commentReducer,
    products:productReducer,
    firestore:firestoreReducer,
 
  
});
export default rootReducer;
