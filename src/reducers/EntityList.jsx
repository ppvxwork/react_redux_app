import { GET_ENTITIES_FAIL, GET_ENTITIES_REQUEST, GET_ENTITIES_SUCCESS, } from '../utils/index';


export function entityListFail(state = false, action) {
  switch (action.type) {
    case GET_ENTITIES_FAIL:
      return action.hasErrored;

    default:
      return state;
  }
}

export function entityListRequest(state = false, action) {
  switch (action.type) {
    case GET_ENTITIES_REQUEST:
      return action.isLoading;

    default:
      return state;
  }
}

export function entityListSuccess(state = [], action) {
  switch (action.type) {
    case GET_ENTITIES_SUCCESS:
      return action.entities;

    default:
      return state;
  }
}
