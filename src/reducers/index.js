import catReducer from './cat';
import dogReducer from './dog';
import animalReducer from './animal';
import {combineReducers} from 'redux';

export default combineReducers({cat: catReducer, dog: dogReducer, animal: animalReducer});


