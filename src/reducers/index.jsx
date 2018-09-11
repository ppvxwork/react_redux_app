import { combineReducers } from 'redux';
import { employeeReducerFail, employeeReducerRequest, employeeReducerSuccess } from './EmployeeReducer';
import { positionReducerFail, positionReducerRequest, positionReducerSuccess } from './PositionReducer';

export default combineReducers({
  employeeReducerRequest,
  employeeReducerSuccess,
  employeeReducerFail,
  positionReducerRequest,
  positionReducerSuccess,
  positionReducerFail,
});
