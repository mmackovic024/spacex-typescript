import { NextActions, NextState, nextActionTypes } from '@/types';

const initialState: NextState = {
  pending: false,
  next: null,
  error: null,
};

const reducer = (state = initialState, action: NextActions) => {
  switch (action.type) {
    case nextActionTypes.FETCH_NEXT_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case nextActionTypes.FETCH_NEXT_SUCCESS:
      return {
        ...state,
        pending: false,
        next: action.payload.next,
        error: null,
      };
    case nextActionTypes.FETCH_NEXT_FAILURE:
      return {
        ...state,
        pending: false,
        next: {},
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
