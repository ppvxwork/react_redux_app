import { combineReducers } from 'redux';
import { entityListFail, entityListRequest, entityListSuccess } from './EntityList';

export default combineReducers({
  entityListRequest,
  entityListSuccess,
  entityListFail,
});
