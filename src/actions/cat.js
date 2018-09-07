import {API_BASE_URL} from '../config';

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetch_cat_request = () => {
  return {
    type: FETCH_CAT_REQUEST,
  };
};
export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetch_cat_success = (data) => {
  return {
    type: FETCH_CAT_SUCCESS,
    data
  };
};
export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetch_cat_error = (error) => {
  return {
    type: FETCH_CAT_ERROR,
    error
  };
};

export const fetchCat = () => dispatch => {
  dispatch(fetch_cat_request());
  return fetch(`${API_BASE_URL}/cat`, {
    method: 'GET'
  })
    .then(res => {
      if(!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(data => dispatch(fetch_cat_success(data)))
    .catch(err => dispatch(fetch_cat_error(err)));
};

export const adpotCat = () => dispatch => {
  return fetch(`${API_BASE_URL}/cat`, {
    method: 'DELETE'
  })
    .then(() => dispatch(fetchCat()))
    .catch(err => dispatch(fetch_cat_error(err)));
};