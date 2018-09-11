import { EMPLOYEE_FAIL, EMPLOYEE_REQUEST, EMPLOYEE_SUCCESS } from '../utils/index';

function fail(bool) {
  return {
    type: EMPLOYEE_FAIL,
    isFailed: bool,
  };
}

function request(bool) {
  return {
    type: EMPLOYEE_REQUEST,
    isLoading: bool,
  };
}

function success(entities) {
  return {
    type: EMPLOYEE_SUCCESS,
    entities,
  };
}

export function getEmployees(url) {
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
      .then(employees => dispatch(success(employees)))
      .catch(() => dispatch(fail(true)));
  };
}

export function updateEmployees(url, employees) {
  return (dispatch) => {
    dispatch(request(true));

    const options = {
      method: 'POST',
      body: JSON.stringify(employees),
    };

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(request(false));

        return response;
      })
      .then(response => response.json())
      .then(employees => dispatch(success(employees)))
      .catch(() => dispatch(fail(true)));
  };
}
