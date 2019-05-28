// import { combineReducers } from 'redux'
// import { counter } from './testCount'
    
// export default combineReducers({
//   counter
// })
import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  alert
});

export default rootReducer;