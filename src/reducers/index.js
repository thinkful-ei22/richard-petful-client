import catReducer from './cat';
import dogReducer from './dog';
import animalReducer from './animal';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  cat: catReducer, 
  dog: dogReducer, 
  animal: animalReducer,
  form: formReducer
});


