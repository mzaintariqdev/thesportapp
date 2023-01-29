import { combineReducers } from 'redux';

import authReducer from './auth';
import scheduleReducer from './schedule';
import clientReducer from './client';

export default combineReducers({
  authReducer,
  scheduleReducer,
  clientReducer,
});
