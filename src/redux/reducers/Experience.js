import { NEW_EXPERIENCE } from "../actions/Experience";

const initialState = {
  content: [],
};

const ProfileInformationReducer = (
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

export default ProfileInformationReducer;
