import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchLaunchesFailure, fetchLaunchesSuccess } from '@/state/actions/launchesActions';
import { launchesActionTypes } from '@/types';
import { getLaunches } from '@/services/api';

function* fetchLaunchesSaga(action: any) {
  const { page } = action;
  console.log('fetchLaunchesSaga action =', action);
  try {
    const response: Promise<any> = yield call(getLaunches, { page });

    yield put(
      fetchLaunchesSuccess({
        data: response,
      })
    );
  } catch (e: any) {
    yield put(
      fetchLaunchesFailure({
        error: e.message,
      })
    );
  }
}

function* launchesSaga() {
  yield all([takeLatest(launchesActionTypes.FETCH_LAUNCHES_REQUEST, fetchLaunchesSaga)]);
}

export default launchesSaga;
