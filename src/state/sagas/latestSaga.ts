import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchLatestFailure, fetchLatestSuccess } from '@/state/actions/latestActions';
import { latestActionTypes } from '@/types';
import { getLatestLaunch } from '@/services/api';

function* fetchLatestSaga() {
  try {
    const response: Promise<any> = yield call(getLatestLaunch);

    yield put(
      fetchLatestSuccess({
        latest: response,
      })
    );
  } catch (e: any) {
    yield put(
      fetchLatestFailure({
        error: e.message,
      })
    );
  }
}

function* latestSaga() {
  yield all([takeLatest(latestActionTypes.FETCH_LATEST_REQUEST, fetchLatestSaga)]);
}

export default latestSaga;
