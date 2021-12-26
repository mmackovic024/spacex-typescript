import {
  FetchNextRequest,
  nextActionTypes,
  FetchNextSuccessPayload,
  FetchNextSuccess,
  FetchNextFailurePayload,
  FetchNextFailure,
} from '@/types';

export const fetchNextRequest = (): FetchNextRequest => ({
  type: nextActionTypes.FETCH_NEXT_REQUEST,
});

export const fetchNextSuccess = (payload: FetchNextSuccessPayload): FetchNextSuccess => ({
  type: nextActionTypes.FETCH_NEXT_SUCCESS,
  payload,
});

export const fetchNextFailure = (payload: FetchNextFailurePayload): FetchNextFailure => ({
  type: nextActionTypes.FETCH_NEXT_FAILURE,
  payload,
});
