import productReducer from './ProductReducer';
import {firestoreReducer} from 'redux-firestore';
import {combineReducers} from 'redux';
import "firebase/storage";
const rootReducer=combineReducers({
    products:productReducer,
    firestore:firestoreReducer
});
export default rootReducer;
