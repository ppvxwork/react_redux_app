import {
  API_ENDPOINT_EMPLOYEES,
  API_ROOT,
  EMPLOYEE_CHECKED_IDS,
  EMPLOYEE_FAIL,
  EMPLOYEE_REQUEST,
  EMPLOYEE_SUCCESS,
} from '../utils/index';

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

function success(employees) {
  return {
    type: EMPLOYEE_SUCCESS,
    employees,
  };
}

function checkedEmployeeIds(ids) {
  return {
    type: EMPLOYEE_CHECKED_IDS,
    ids,
  };
}

export function getEmployees() {
  return (dispatch) => {
    dispatch(request(true));

    fetch(API_ROOT + API_ENDPOINT_EMPLOYEES)
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

export function updateEmployees(employees) {
  return (dispatch) => {
    dispatch(request(true));

    const options = {
      method: 'POST',
      body: JSON.stringify(employees),
    };

    fetch(API_ROOT + API_ENDPOINT_EMPLOYEES, options)
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

export function getCheckedEmployeeIds(ids) {
  return (dispatch) => {
    console.log('Action', ids);
    dispatch(checkedEmployeeIds(ids));
  };
}
