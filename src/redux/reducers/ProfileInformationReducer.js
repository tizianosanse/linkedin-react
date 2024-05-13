import { GET_INFORMATION } from "../actions/ProfileInformationActions";

const initialState = {
  content: [],
};

const ProfileInformationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFORMATION:
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

export default ProfileInformationReducer;
