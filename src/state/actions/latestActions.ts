import {
  latestActionTypes,
  FetchLatestFailure,
  FetchLatestFailurePayload,
  FetchLatestRequest,
  FetchLatestSuccess,
  FetchLatestSuccessPayload,
} from '@/types';

export const fetchLatestRequest = (): FetchLatestRequest => ({
  type: latestActionTypes.FETCH_LATEST_REQUEST,
});

export const fetchLatestSuccess = (payload: FetchLatestSuccessPayload): FetchLatestSuccess => ({
  type: latestActionTypes.FETCH_LATEST_SUCCESS,
  payload,
});

export const fetchLatestFailure = (payload: FetchLatestFailurePayload): FetchLatestFailure => ({
  type: latestActionTypes.FETCH_LATEST_FAILURE,
  payload,
});
