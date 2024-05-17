import { GET_COMMENTS, GET_POSTS, NEW_COMMENT, NEW_POST } from "../actions/Post";

const initialState = {
  content: [],
  newPost: [],
  comments: [],
  newComment: [],
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
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case NEW_COMMENT:
      return {
        ...state,
        newComment: action.payload,
      };
    default:
      return state;
  }
};

export default PostReducer;
