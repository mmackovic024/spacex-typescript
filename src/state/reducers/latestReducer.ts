import { LatestActions, LatestState, latestActionTypes } from '@/types';

const initialState: LatestState = {
  pending: false,
  latest: null,
  error: null,
};

const reducer = (state = initialState, action: LatestActions) => {
  switch (action.type) {
    case latestActionTypes.FETCH_LATEST_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case latestActionTypes.FETCH_LATEST_SUCCESS:
      return {
        ...state,
        pending: false,
        latest: action.payload.latest,
        error: null,
      };
    case latestActionTypes.FETCH_LATEST_FAILURE:
      return {
        ...state,
        pending: false,
        latest: {},
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
