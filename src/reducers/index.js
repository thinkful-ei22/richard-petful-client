import catReducer from './cat';
import dogReducer from './dog';
import {combineReducers} from 'redux';

export default combineReducers({cat: catReducer, dog: dogReducer});


