import {API_BASE_URL} from '../config';

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetch_dog_request = () => {
  return {
    type: FETCH_DOG_REQUEST,
  };
};
export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetch_dog_success = (data) => {
  return {
    type: FETCH_DOG_SUCCESS,
    data
  };
};
export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetch_dog_error = (error) => {
  return {
    type: FETCH_DOG_ERROR,
    error
  };
};

export const fetchDog = () => dispatch => {
  dispatch(fetch_dog_request());
  return fetch(`${API_BASE_URL}/dog`, {
    method: 'GET'
  })
    .then(res => {
      if(!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(data => dispatch(fetch_dog_success(data)))
    .catch(err => dispatch(fetch_dog_error(err)));
};

export const adpotDog = () => dispatch => {
  return fetch(`${API_BASE_URL}/dog`, {
    method: 'DELETE'
  })
    .then(() => dispatch(fetchDog()))
    .catch(err => dispatch(fetch_dog_error(err)));
};