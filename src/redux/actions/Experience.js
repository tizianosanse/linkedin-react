export const NEW_EXPERIENCE = "NEW_EXPERIENCE";
export const SINGLE_EXPERIENCE = "SINGLE_EXPERIENCE";

export const PostExperienceAction = (id, method, informationPut) => {
  return async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + id + "/experiences", {
        method: method,
        body: JSON.stringify({
          role: informationPut.role,
          company: informationPut.companyName,
          startDate: informationPut.yearStart + "-" + informationPut.monthStart,

          endDate: informationPut.yearEnd + "-" + informationPut.monthEnd,
          description: informationPut.description,
          area: informationPut.area,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2IyNjE2N2U1MzAwMTVmYTY5OGEiLCJpYXQiOjE3MTU1ODc4NzgsImV4cCI6MTcxNjc5NzQ3OH0.SHSObFFhMqSfeMFXS-_CXSwSwcRHMZFVLB00JR8Xaz4",
        },
      });
      if (resp.ok) {
        console.log("fetch avvenuta con successo");
      } else {
        throw new Error("Errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetExperienceAction = (id, method) => {
  return async (dispatch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + id + "/experiences", {
        method: method,

        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2IyNjE2N2U1MzAwMTVmYTY5OGEiLCJpYXQiOjE3MTU1ODc4NzgsImV4cCI6MTcxNjc5NzQ3OH0.SHSObFFhMqSfeMFXS-_CXSwSwcRHMZFVLB00JR8Xaz4",
        },
      });
      if (resp.ok) {
        console.log("fetch avvenuta con successo");
        const data = await resp.json();
        dispatch({ type: NEW_EXPERIENCE, payload: data });
      } else {
        throw new Error("Errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
//  ho dovuto fare due action non so perché con una non mi riusciva il get
export const PutSingleExperience = (id, method, singleExpId) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + id + "/experiences/" + singleExpId,
        {
          method: method,

          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2IyNjE2N2U1MzAwMTVmYTY5OGEiLCJpYXQiOjE3MTU1ODc4NzgsImV4cCI6MTcxNjc5NzQ3OH0.SHSObFFhMqSfeMFXS-_CXSwSwcRHMZFVLB00JR8Xaz4",
          },
        }
      );
      if (resp.ok) {
        console.log("fetch avvenuta con successo");
        const data = await resp.json();
        dispatch({
          type: SINGLE_EXPERIENCE,
          payload: data,
        });
      } else {
        throw new Error("Errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const PutExperienceAction = (id, method, informationPut, singleExpId) => {
  return async () => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + id + "/experiences/" + singleExpId,
        {
          method: method,
          body: JSON.stringify({
            role: informationPut.role,
            company: informationPut.companyName,
            startDate: informationPut.yearStart + "-" + informationPut.monthStart,
            endDate: informationPut.yearEnd + "-" + informationPut.monthEnd,
            description: informationPut.description,
            area: informationPut.area,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2IyNjE2N2U1MzAwMTVmYTY5OGEiLCJpYXQiOjE3MTU1ODc4NzgsImV4cCI6MTcxNjc5NzQ3OH0.SHSObFFhMqSfeMFXS-_CXSwSwcRHMZFVLB00JR8Xaz4",
          },
        }
      );
      if (resp.ok) {
        console.log("fetch modificata avvenuta con successo");
      } else {
        throw new Error("Errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const DeleteExperience = (id, singleExpId) => {
  return async () => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + id + "/experiences/" + singleExpId,
        {
          method: "DELETE",

          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2IyNjE2N2U1MzAwMTVmYTY5OGEiLCJpYXQiOjE3MTU1ODc4NzgsImV4cCI6MTcxNjc5NzQ3OH0.SHSObFFhMqSfeMFXS-_CXSwSwcRHMZFVLB00JR8Xaz4",
          },
        }
      );
      if (resp.ok) {
        console.log("fetch avvenuta con successo");
      } else {
        throw new Error("Errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
