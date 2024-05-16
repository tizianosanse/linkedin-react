import { GET_NEWS } from "../actions/WorldNews";

const initialState = {
  content: [],
};
const WorldNewsReduces = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default WorldNewsReduces;
