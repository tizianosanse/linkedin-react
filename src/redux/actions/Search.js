import { GET_SEARCH } from "../reducers/Search";

export const getSearchAction = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=full stack developer&limit=3",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2QxZjE2N2U1MzAwMTVmYTY5OGYiLCJpYXQiOjE3MTU1ODgzODMsImV4cCI6MTcxNjc5Nzk4M30.xRDfyiWit6rn9phs8heXGVoNekK8AKEZcU7iBV53Q2o",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();

        dispatch({ type: GET_SEARCH, payload: data.data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
