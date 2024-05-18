import { IS_ERROR, IS_LOADING } from "./LoadingAndError";

export const GET_INFORMATION = "GET_INFORMATION";
export const GET_INFORMATION_NAV = "GET_INFORMATION_NAV";
export const GET_INFORMATION_JOBS_PREMIUM = "GET_INFORMATION_JOBS_PREMIUM";
export const SET_SHOW = "SET_SHOW";
export const SET_SHOW_CONFIRM = "SET_SHOW_CONFIRM";

export const getInformation = (id) => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + id, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2IyNjE2N2U1MzAwMTVmYTY5OGEiLCJpYXQiOjE3MTU1ODc4NzgsImV4cCI6MTcxNjc5NzQ3OH0.SHSObFFhMqSfeMFXS-_CXSwSwcRHMZFVLB00JR8Xaz4",
        },
      });
      if (response.ok) {
        let data = await response.json();

        dispatch({ type: GET_INFORMATION, payload: data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};

export const getInformationNavBar = () => {
  return async (dispatch) => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2IyNjE2N2U1MzAwMTVmYTY5OGEiLCJpYXQiOjE3MTU1ODc4NzgsImV4cCI6MTcxNjc5NzQ3OH0.SHSObFFhMqSfeMFXS-_CXSwSwcRHMZFVLB00JR8Xaz4",
        },
      });
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: GET_INFORMATION_NAV,
          payload: data,
        });
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
export const getInformationJobsPremium = () => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2IyNjE2N2U1MzAwMTVmYTY5OGEiLCJpYXQiOjE3MTU1ODc4NzgsImV4cCI6MTcxNjc5NzQ3OH0.SHSObFFhMqSfeMFXS-_CXSwSwcRHMZFVLB00JR8Xaz4",
        },
      });
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: GET_INFORMATION_JOBS_PREMIUM,
          payload: data,
        });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};

export const setShow = (bool) => {
  console.log(bool);
  return {
    type: SET_SHOW,
    payload: bool,
  };
};
export const setShowConfirm = (bool) => {
  console.log(bool);
  return {
    type: SET_SHOW_CONFIRM,
    payload: bool,
  };
};
