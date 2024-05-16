import { GET_JOBS, GET_NETWORK_JOBS, GET_MORE_JOBS } from "../reducers/Jobs";

export const getJobsAction = () => {
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

        dispatch({ type: GET_JOBS, payload: data.data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
export const getNetworkJobsAction = () => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=junior developer&limit=3", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2QxZjE2N2U1MzAwMTVmYTY5OGYiLCJpYXQiOjE3MTU1ODgzODMsImV4cCI6MTcxNjc5Nzk4M30.xRDfyiWit6rn9phs8heXGVoNekK8AKEZcU7iBV53Q2o",
        },
      });
      if (response.ok) {
        let data = await response.json();

        dispatch({ type: GET_NETWORK_JOBS, payload: data.data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
export const getMoreJobsAction = () => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=developer", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2QxZjE2N2U1MzAwMTVmYTY5OGYiLCJpYXQiOjE3MTU1ODgzODMsImV4cCI6MTcxNjc5Nzk4M30.xRDfyiWit6rn9phs8heXGVoNekK8AKEZcU7iBV53Q2o",
        },
      });
      if (response.ok) {
        let data = await response.json();

        dispatch({ type: GET_MORE_JOBS, payload: data.data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
