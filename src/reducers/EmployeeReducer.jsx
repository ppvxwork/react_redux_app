import { EMPLOYEE_FAIL, EMPLOYEE_REQUEST, EMPLOYEE_SUCCESS } from '../utils/index';


export function employeeReducerFail(state = false, action) {
  switch (action.type) {
    case EMPLOYEE_FAIL:
      return action.isFailed;

    default:
      return state;
  }
}

export function employeeReducerRequest(state = false, action) {
  switch (action.type) {
    case EMPLOYEE_REQUEST:
      return action.isLoading;

    default:
      return state;
  }
}

export function employeeReducerSuccess(state = [], action) {
  switch (action.type) {
    case EMPLOYEE_SUCCESS:
      return action.entities;

    default:
      return state;
  }
}
