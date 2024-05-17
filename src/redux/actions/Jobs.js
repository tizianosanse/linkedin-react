import {
  GET_JOBS,
  GET_NETWORK_JOBS,
  GET_MORE_JOBS,
  JOBS_PREMIUM,
} from "../reducers/Jobs";
import { IS_LOADING } from "./LoadingAndError";

export const getJobsAction = () => {
  return async (dispatch) => {
    dispatch({ type: IS_LOADING, payload: true });
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
        dispatch({ type: IS_LOADING, payload: false });

        dispatch({ type: GET_JOBS, payload: data.data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
      dispatch({ type: IS_LOADING, payload: false });
    }
  };
};
export const getNetworkJobsAction = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=junior developer&limit=3",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2QxZjE2N2U1MzAwMTVmYTY5OGYiLCJpYXQiOjE3MTU1ODgzODMsImV4cCI6MTcxNjc5Nzk4M30.xRDfyiWit6rn9phs8heXGVoNekK8AKEZcU7iBV53Q2o",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();

        dispatch({
          type: GET_NETWORK_JOBS,
          payload: data.data,
        });
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
      let response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=developer",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2QxZjE2N2U1MzAwMTVmYTY5OGYiLCJpYXQiOjE3MTU1ODgzODMsImV4cCI6MTcxNjc5Nzk4M30.xRDfyiWit6rn9phs8heXGVoNekK8AKEZcU7iBV53Q2o",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();

        dispatch({
          type: GET_MORE_JOBS,
          payload: data.data,
        });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
export const getJobsPremium = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=back-end&limit=2",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2QxZjE2N2U1MzAwMTVmYTY5OGYiLCJpYXQiOjE3MTU1ODgzODMsImV4cCI6MTcxNjc5Nzk4M30.xRDfyiWit6rn9phs8heXGVoNekK8AKEZcU7iBV53Q2o",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: JOBS_PREMIUM,
          payload: data.data,
        });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
