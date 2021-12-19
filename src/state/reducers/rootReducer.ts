import { combineReducers } from 'redux';
import latestReducer from './latestReducer';

const rootReducer = combineReducers({
  latest: latestReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
