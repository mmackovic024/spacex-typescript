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
