import productReducer from './ProductReducer';
import authReducer from './authReducer'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
import {combineReducers} from 'redux';

const rootReducer=combineReducers({
    auth:authReducer,
    products:productReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
 
  
});
export default rootReducer;
