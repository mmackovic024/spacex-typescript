import { LaunchesActions, LaunchesState, launchesActionTypes } from '@/types';

const initialState: LaunchesState = {
  pending: false,
  page: 1,
  totalPages: 1,
  hasMore: true,
  data: [],
  error: null,
};

const reducer = (state = initialState, action: LaunchesActions) => {
  switch (action.type) {
    case launchesActionTypes.FETCH_LAUNCHES_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case launchesActionTypes.FETCH_LAUNCHES_SUCCESS:
      return {
        ...state,
        pending: false,
        page: action.payload.data.page,
        totalPages: action.payload.data.totalPages,
        hasMore: action.payload.data.hasNextPage,
        data: [...state.data, ...action.payload.data.docs],
        error: null,
      };
    case launchesActionTypes.FETCH_LAUNCHES_FAILURE:
      return {
        ...state,
        pending: false,
        data: {},
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
