import {FETCH_DOG_REQUEST, FETCH_DOG_SUCCESS, FETCH_DOG_ERROR} from '../actions';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export default function dogReducer(state = initialState, action) {
  switch(action.type) {
  case FETCH_DOG_SUCCESS: 
    return Object.assign({}, state, {
      data: action.data,
      loading: false
    });
  case FETCH_DOG_REQUEST:
    return Object.assign({}, state, {
      loading:true
    });
  case FETCH_DOG_ERROR: 
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  default: return state;
  }
}
