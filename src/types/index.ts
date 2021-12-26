export enum latestActionTypes {
  FETCH_LATEST_REQUEST = 'FETCH_LATEST_REQUEST',
  FETCH_LATEST_SUCCESS = 'FETCH_LATEST_SUCCESS',
  FETCH_LATEST_FAILURE = 'FETCH_LATEST_FAILURE',
}

export interface LatestState {
  pending: boolean;
  latest: any;
  error: string | null;
}

export interface FetchLatestSuccessPayload {
  latest: any;
}

export interface FetchLatestFailurePayload {
  error: string;
}

export interface FetchLatestRequest {
  type: typeof latestActionTypes.FETCH_LATEST_REQUEST;
}

export type FetchLatestSuccess = {
  type: typeof latestActionTypes.FETCH_LATEST_SUCCESS;
  payload: FetchLatestSuccessPayload;
};

export type FetchLatestFailure = {
  type: typeof latestActionTypes.FETCH_LATEST_FAILURE;
  payload: FetchLatestFailurePayload;
};

export type LatestActions = FetchLatestRequest | FetchLatestSuccess | FetchLatestFailure;

export enum nextActionTypes {
  FETCH_NEXT_REQUEST = 'FETCH_NEXT_REQUEST',
  FETCH_NEXT_SUCCESS = 'FETCH_NEXT_SUCCESS',
  FETCH_NEXT_FAILURE = 'FETCH_NEXT_FAILURE',
}

export interface NextState {
  pending: boolean;
  next: any;
  error: string | null;
}

export interface FetchNextSuccessPayload {
  next: any;
}

export interface FetchNextFailurePayload {
  error: string;
}

export interface FetchNextRequest {
  type: typeof nextActionTypes.FETCH_NEXT_REQUEST;
}

export type FetchNextSuccess = {
  type: typeof nextActionTypes.FETCH_NEXT_SUCCESS;
  payload: FetchNextSuccessPayload;
};

export type FetchNextFailure = {
  type: typeof nextActionTypes.FETCH_NEXT_FAILURE;
  payload: FetchNextFailurePayload;
};

export type NextActions = FetchNextRequest | FetchNextSuccess | FetchNextFailure;
