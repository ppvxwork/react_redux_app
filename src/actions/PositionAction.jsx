import { POSITION_FAIL, POSITION_SUCCESS, POSITION_REQUEST } from '../utils/index';

function fail(bool) {
  return {
    type: POSITION_FAIL,
    isFailed: bool,
  };
}

function request(bool) {
  return {
    type: POSITION_REQUEST,
    isLoading: bool,
  };
}

function success(positions) {
  return {
    type: POSITION_SUCCESS,
    positions,
  };
}

export function getPositions(url) {
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
      .then(response => response.json())
      .then(positions => dispatch(success(positions)))
      .catch(() => dispatch(fail(true)));
  };
}
