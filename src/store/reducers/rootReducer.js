import productReducer from './ProductReducer';
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
import {combineReducers} from 'redux';

const rootReducer=combineReducers({
 
    products:productReducer,
    firestore:firestoreReducer,
 
  
});
export default rootReducer;
