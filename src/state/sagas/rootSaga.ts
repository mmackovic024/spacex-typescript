import { all, fork } from 'redux-saga/effects';
import latestSaga from './latestSaga';

export function* rootSaga() {
  yield all([fork(latestSaga)]);
}
