import {FETCH_ANIMAL_REQUEST, FETCH_ANIMAL_ERROR, FETCH_ANIMAL_SUCCESS} from '../actions/animal';

const initialState = {
  dogData: null,
  catData: null,
  error: null,
  loading: false
};

export default function animalReducer (state=initialState, action) {
  switch(action.type) {
  case FETCH_ANIMAL_SUCCESS:
    if (action.species === 'dog') {
      return Object.assign({}, state, {
        dogData: action.data,
        loading: false
      });
    } else {
      return Object.assign({}, state, {
        catData: action.data,
        loading: false
      });
    }
  case FETCH_ANIMAL_REQUEST:
    return Object.assign({}, state, {
      loading:true
    });
  case FETCH_ANIMAL_ERROR: 
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  default: return state;
  }
}