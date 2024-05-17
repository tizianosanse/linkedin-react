import { IS_ERROR } from "../actions/LoadingAndError";

const initialState = {
  content: false,
};

const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_ERROR:
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

export default ErrorReducer;
