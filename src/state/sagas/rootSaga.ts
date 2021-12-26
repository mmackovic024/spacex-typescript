import { all, fork } from 'redux-saga/effects';
import latestSaga from './latestSaga';
import nextSaga from './nextSaga';

export function* rootSaga() {
  yield all([fork(latestSaga), fork(nextSaga)]);
}
