import {
  launchesActionTypes,
  FetchLaunchesFailure,
  FetchLaunchesFailurePayload,
  FetchLaunchesRequest,
  FetchLaunchesSuccess,
  FetchLaunchesSuccessPayload,
} from '@/types';

export const fetchLaunchesRequest = (page: number, before?: string): FetchLaunchesRequest => ({
  type: launchesActionTypes.FETCH_LAUNCHES_REQUEST,
  page,
  before,
});

export const fetchLaunchesSuccess = (payload: FetchLaunchesSuccessPayload): FetchLaunchesSuccess => ({
  type: launchesActionTypes.FETCH_LAUNCHES_SUCCESS,
  payload,
});

export const fetchLaunchesFailure = (payload: FetchLaunchesFailurePayload): FetchLaunchesFailure => ({
  type: launchesActionTypes.FETCH_LAUNCHES_FAILURE,
  payload,
});
