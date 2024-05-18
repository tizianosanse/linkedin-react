import {
  GET_INFORMATION,
  GET_INFORMATION_JOBS_PREMIUM,
  GET_INFORMATION_NAV,
  SET_SHOW,
  SET_SHOW_CONFIRM,
} from "../actions/ProfileInformationActions";

const initialState = {
  content: [],
  informationNav: [],
  informationJobPrem: [],
  show: false,
  showConfirm: false,
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
    case GET_INFORMATION_JOBS_PREMIUM:
      return {
        ...state,
        informationJobPrem: action.payload,
      };
    case SET_SHOW:
      return {
        ...state,
        show: action.payload,
      };
    case SET_SHOW_CONFIRM:
      return {
        ...state,
        showConfirm: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default ProfileInformationReducer;
