import {
  NEW_EXPERIENCE,
  SINGLE_EXPERIENCE,
} from "../actions/Experience";

const initialState = {
  content: [],
  singleEperience: null,
};

const ExperienceReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case NEW_EXPERIENCE:
      return {
        ...state,
        content: action.payload,
      };
    case SINGLE_EXPERIENCE:
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

export default ExperienceReducer;
