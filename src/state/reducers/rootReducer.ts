import { combineReducers } from 'redux';
import latestReducer from './latestReducer';
import nextReducer from './nextReducer';
import launchesReducer from './launchesReducer';

const rootReducer = combineReducers({
  latest: latestReducer,
  next: nextReducer,
  launches: launchesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
