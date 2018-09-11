import { POSITION_FAIL, POSITION_REQUEST, POSITION_SUCCESS } from '../utils/index';


export function positionReducerFail(state = false, action) {
  switch (action.type) {
    case POSITION_FAIL:
      return action.isFailed;

    default:
      return state;
  }
}

export function positionReducerRequest(state = false, action) {
  switch (action.type) {
    case POSITION_REQUEST:
      return action.isLoading;

    default:
      return state;
  }
}

export function positionReducerSuccess(state = [], action) {
  switch (action.type) {
    case POSITION_SUCCESS:
      return action.positions;

    default:
      return state;
  }
}
