import {FETCH_CAT_REQUEST, FETCH_CAT_SUCCESS, FETCH_CAT_ERROR} from '../actions';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export default function catReducer (state=initialState, action) {
  switch(action.type) {
  case FETCH_CAT_SUCCESS: 
    return Object.assign({}, state, {
      data: action.data,
      loading: false
    });
  case FETCH_CAT_REQUEST:
    return Object.assign({}, state, {
      loading:true
    });
  case FETCH_CAT_ERROR: 
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  default: return state;
  }
}