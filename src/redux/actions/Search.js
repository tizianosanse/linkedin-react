import { GET_SEARCH, SET_ID } from "../reducers/Search";

export const setID = (data) => {
  return {
    type: SET_ID,
    payload: data,
  };
};

export const getSearchAction = (query) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
          query,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2QxZjE2N2U1MzAwMTVmYTY5OGYiLCJpYXQiOjE3MTU1ODgzODMsImV4cCI6MTcxNjc5Nzk4M30.xRDfyiWit6rn9phs8heXGVoNekK8AKEZcU7iBV53Q2o",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        dispatch({
          type: GET_SEARCH,
          payload: data.data.slice(0, 30),
        });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};

export const getJobDetails = (id) => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + id, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2QxZjE2N2U1MzAwMTVmYTY5OGYiLCJpYXQiOjE3MTU1ODgzODMsImV4cCI6MTcxNjc5Nzk4M30.xRDfyiWit6rn9phs8heXGVoNekK8AKEZcU7iBV53Q2o",
        },
      });
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        dispatch({ type: GET_SEARCH, payload: data.data.slice(0, 30) });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
