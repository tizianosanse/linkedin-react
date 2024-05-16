import { IS_LOADING } from "../actions/LoadingAndError";

const initialState = {
  content: false,
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default LoadingReducer;
