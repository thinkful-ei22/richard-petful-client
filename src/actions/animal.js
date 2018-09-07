import {API_BASE_URL} from '../config';

export const FETCH_ANIMAL_REQUEST = 'FETCH_ANIMAL_REQUEST';
export const fetch_animal_request = () => {
  return {
    type: FETCH_ANIMAL_REQUEST
  };
};
export const FETCH_ANIMAL_SUCCESS = 'FETCH_ANIMAL_SUCCESS';
export const fetch_animal_success = (data, species) => {
  return {
    type: FETCH_ANIMAL_SUCCESS,
    data,
    species
  };
};
export const FETCH_ANIMAL_ERROR = 'FETCH_ANIMAL_ERROR';
export const fetch_animal_error = (error) => {
  return {
    type: FETCH_ANIMAL_ERROR,
    error
  };
};

export const fetchAnimal = (species) => dispatch => {
  dispatch(fetch_animal_request());
  return fetch(`${API_BASE_URL}/${species}`, {
    method: 'GET'
  })
    .then(res => {
      if(!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(data => dispatch(fetch_animal_success(data, species)))
    .catch(err => dispatch(fetch_animal_error(err)));
};

export const adpotAnimal = (species) => dispatch => {
  return fetch(`${API_BASE_URL}/${species}`, {
    method: 'DELETE'
  })
    .then(() => dispatch(fetchAnimal(species)))
    .catch(err => dispatch(fetch_animal_error(err)));
};
