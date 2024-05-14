import { NEW_EXPERIENCE } from "../actions/Experience";

const initialState = {
  content: [],
};

const ExperienceReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case NEW_EXPERIENCE:
      return {
        ...state,
        content: [...state, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};

export default ExperienceReducer;
