import { combineReducers } from 'redux';
import {
  employeeReducerFail, employeeReducerRequest, employeeReducerSuccess, employeeReducerCheckedIds,
} from './EmployeeReducer';
import { positionReducerFail, positionReducerRequest, positionReducerSuccess } from './PositionReducer';

export default combineReducers({
  employeeReducerRequest,
  employeeReducerSuccess,
  employeeReducerFail,
  employeeReducerCheckedIds,
  positionReducerRequest,
  positionReducerSuccess,
  positionReducerFail,
});
