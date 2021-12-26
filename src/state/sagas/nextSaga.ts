import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchNextFailure, fetchNextSuccess } from '@/state/actions/nextActions';
import { nextActionTypes } from '@/types';
import { getNextLaunch } from '@/services/api';

function* fetchNextSaga() {
  try {
    const response: Promise<any> = yield call(getNextLaunch);

    yield put(
      fetchNextSuccess({
        next: response,
      })
    );
  } catch (e: any) {
    yield put(
      fetchNextFailure({
        error: e.message,
      })
    );
  }
}

function* nextSaga() {
  yield all([takeLatest(nextActionTypes.FETCH_NEXT_REQUEST, fetchNextSaga)]);
}

export default nextSaga;
