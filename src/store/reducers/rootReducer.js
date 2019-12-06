import productReducer from './ProductReducer';
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
import {combineReducers} from 'redux';
import commentReducer from './commentReducer'
import chatReducer from './chatReducer'

const rootReducer=combineReducers({
    chat:chatReducer,
    comment:commentReducer,
    products:productReducer,
    firestore:firestoreReducer,
 
  
});
export default rootReducer;
