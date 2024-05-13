import { GET_NEW_PROFILES } from "../actions/Profiles";

const initialState = {
  content: [],
};
const ProfilesReduces = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEW_PROFILES:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    default:
      return state;
  }
};

export default ProfilesReduces;
