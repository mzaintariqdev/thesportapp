import { combineReducers } from 'redux';

import authReducer from './auth';
import scheduleReducer from './schedule';
import clientReducer from './client';
import dashboardReducer from './dashboard';

export default combineReducers({
  authReducer,
  scheduleReducer,
  clientReducer,
  dashboardReducer,
});
