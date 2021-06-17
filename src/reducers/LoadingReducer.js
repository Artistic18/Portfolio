import { LOADING_NEW } from '../actions/actionTypes';

const initialState = {
  loading: true,
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_NEW:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default LoadingReducer;
