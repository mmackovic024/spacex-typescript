import { combineReducers } from 'redux';
import latestReducer from './latestReducer';
import nextReducer from './nextReducer';

const rootReducer = combineReducers({
  latest: latestReducer,
  next: nextReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
