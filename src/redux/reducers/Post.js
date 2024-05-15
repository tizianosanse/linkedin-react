import { GET_POSTS, NEW_POST } from "../actions/Post";

const initialState = {
  content: [],
  newPost: [],
};
const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        content: action.payload,
      };
    case NEW_POST:
      return {
        ...state,
        newPost: action.payload,
      };
    default:
      return state;
  }
};

export default PostReducer;
