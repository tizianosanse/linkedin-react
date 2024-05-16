import { IS_LOADING } from "./LoadingAndError";

export const GET_POSTS = "GET_POSTS";
export const NEW_POST = "NEW_POST";
export const UPLOAD_POST_IMAGE = "UPLOAD_POST_IMAGE";

export const getPostsAction = () => {
  return async (dispatch) => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2QxZjE2N2U1MzAwMTVmYTY5OGYiLCJpYXQiOjE3MTU1ODgzODMsImV4cCI6MTcxNjc5Nzk4M30.xRDfyiWit6rn9phs8heXGVoNekK8AKEZcU7iBV53Q2o",
        },
      });
      if (response.ok) {
        let data = await response.json();
        data.reverse();
        dispatch({ type: GET_POSTS, payload: data });
        dispatch({ type: IS_LOADING, payload: false });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
export const createNewPost = (text, image) => {
  return async (dispatch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        body: text,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2IyNjE2N2U1MzAwMTVmYTY5OGEiLCJpYXQiOjE3MTU1ODc4NzgsImV4cCI6MTcxNjc5NzQ3OH0.SHSObFFhMqSfeMFXS-_CXSwSwcRHMZFVLB00JR8Xaz4",
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        dispatch({ type: NEW_POST, payload: data });
        dispatch(uploadPostImage(image, data._id));
      }
      throw new Error("Errore nella fetch");
    } catch (error) {
      console.log(error);
    }
  };
};

export const uploadPostImage = (image, id) => {
  return async (dispatch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + id, {
        method: "POST",
        body: image,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2IyNjE2N2U1MzAwMTVmYTY5OGEiLCJpYXQiOjE3MTU1ODc4NzgsImV4cCI6MTcxNjc5NzQ3OH0.SHSObFFhMqSfeMFXS-_CXSwSwcRHMZFVLB00JR8Xaz4",
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        dispatch({ type: UPLOAD_POST_IMAGE, payload: data });
        dispatch(getPostsAction());
      }
      throw new Error("Errore nella fetch");
    } catch (error) {
      console.log(error);
    }
  };
};
