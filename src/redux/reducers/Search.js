export const GET_SEARCH = "GET_SEARCH";
export const SET_ID = "SET_ID";
const initialState = {
  searchJobs: [],
  id: "",
};

const Search = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH:
      return {
        ...state,
        searchJobs: action.payload,
      };
    case SET_ID:
      return {
        ...state,
        id: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default Search;
