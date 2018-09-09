import { GET_ENTITIES_FAIL, GET_ENTITIES_REQUEST, GET_ENTITIES_SUCCESS, } from '../utils/index';

export function fail(bool) {
  return {
    type: GET_ENTITIES_FAIL,
    hasErrored: bool,
  };
}

export function request(bool) {
  return {
    type: GET_ENTITIES_REQUEST,
    isLoading: bool,
  };
}

export function success(entities) {
  return {
    type: GET_ENTITIES_SUCCESS,
    entities,
  };
}

export function fetchData(url) {
  return (dispatch) => {
    dispatch(request(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(request(false));

        return response;
      })
      .then((response) => response.json())
      .then((entities) => dispatch(success(entities)))
      .catch(() => dispatch(fail(true)));
  };
}
