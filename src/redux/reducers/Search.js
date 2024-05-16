export const GET_SEARCH = "GET_SEARCH";
const initialState = {
  searchJobs: [],
};

const Search = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH:
      return {
        ...state,
        searchJobs: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default Search;
