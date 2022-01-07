/**
 * latest launch
 */
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

/**
 * next launch
 */
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

/**
 * all launches
 */
export enum launchesActionTypes {
  FETCH_LAUNCHES_REQUEST = 'FETCH_LAUNCHES_REQUEST',
  FETCH_LAUNCHES_SUCCESS = 'FETCH_LAUNCHES_SUCCESS',
  FETCH_LAUNCHES_FAILURE = 'FETCH_LAUNCHES_FAILURE',
}

export interface LaunchesState {
  pending: boolean;
  page: number;
  totalPages?: number;
  hasMore: boolean;
  data: any;
  error: string | null;
}

export interface FetchLaunchesSuccessPayload {
  data: any;
}

export interface FetchLaunchesFailurePayload {
  error: string;
}

export interface FetchLaunchesRequest {
  type: typeof launchesActionTypes.FETCH_LAUNCHES_REQUEST;
  page: number;
  before?: string;
}

export type FetchLaunchesSuccess = {
  type: typeof launchesActionTypes.FETCH_LAUNCHES_SUCCESS;
  payload: FetchLaunchesSuccessPayload;
};

export type FetchLaunchesFailure = {
  type: typeof launchesActionTypes.FETCH_LAUNCHES_FAILURE;
  payload: FetchLaunchesFailurePayload;
};

export type LaunchesActions = FetchLaunchesRequest | FetchLaunchesSuccess | FetchLaunchesFailure;
