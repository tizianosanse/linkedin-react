export const UPLOAD_FILE = "UPLOAD_FILE";

export const handleUploadProfilePictures = (formData, id) => {
  return async (dispatch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + id + "/picture", {
        method: "POST",
        body: formData,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2IyNjE2N2U1MzAwMTVmYTY5OGEiLCJpYXQiOjE3MTU1ODc4NzgsImV4cCI6MTcxNjc5NzQ3OH0.SHSObFFhMqSfeMFXS-_CXSwSwcRHMZFVLB00JR8Xaz4",
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        dispatch({ type: UPLOAD_FILE, payload: data });
      }
      throw new Error("Errore nella fetch");
    } catch (error) {
      console.log(error);
    }
  };
};
export const handleUploadExperiencePictures = (formData, id, singleExpId) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + id + "/experiences/" + singleExpId + "/picture",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2IyNjE2N2U1MzAwMTVmYTY5OGEiLCJpYXQiOjE3MTU1ODc4NzgsImV4cCI6MTcxNjc5NzQ3OH0.SHSObFFhMqSfeMFXS-_CXSwSwcRHMZFVLB00JR8Xaz4",
          },
        }
      );
      if (resp.ok) {
        const data = await resp.json();
        dispatch({ type: UPLOAD_FILE, payload: data });
      }
      throw new Error("Errore nella fetch");
    } catch (error) {
      console.log(error);
    }
  };
};
