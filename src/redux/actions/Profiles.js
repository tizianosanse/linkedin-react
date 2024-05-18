import { IS_ERROR, IS_LOADING } from "./LoadingAndError";

export const GET_NEW_PROFILES = "GET_NEW_PROFILES";

export const profilesAction = () => {
  return async (dispatch) => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2QxZjE2N2U1MzAwMTVmYTY5OGYiLCJpYXQiOjE3MTU1ODgzODMsImV4cCI6MTcxNjc5Nzk4M30.xRDfyiWit6rn9phs8heXGVoNekK8AKEZcU7iBV53Q2o",
        },
      });
      if (response.ok) {
        let data = await response.json();
        dispatch({ type: GET_NEW_PROFILES, payload: data });
        dispatch({ type: IS_LOADING, payload: false });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
      dispatch({ type: IS_LOADING, payload: false });
      dispatch({ type: IS_ERROR, payload: false });
    }
  };
};
