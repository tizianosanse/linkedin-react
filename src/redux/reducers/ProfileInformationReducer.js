import { GET_INFORMATION, GET_INFORMATION_NAV } from "../actions/ProfileInformationActions";

const initialState = {
  content: [],
  informationNav: [],
};

const ProfileInformationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFORMATION:
      return {
        ...state,
        content: action.payload,
      };
    case GET_INFORMATION_NAV:
      return {
        ...state,
        informationNav: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default ProfileInformationReducer;
