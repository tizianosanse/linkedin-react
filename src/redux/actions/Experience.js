export const NEW_EXPERIENCE = "NEW_EXPERIENCE";

export const PostExperienceAction = (
  id,
  method,
  informationPut
) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" +
          id +
          "/experiences",
        {
          method: method,
          body: JSON.stringify({
            role: informationPut.title,
            company: informationPut.companyName,
            startDate:
              informationPut.monthStart +
              "-" +
              informationPut.monthStart,
            endDate:
              informationPut.monthEnd +
              "-" +
              informationPut.monthEnd,
            description: informationPut.description,
            area: informationPut.area,
          }),
          headers: {
            "Content-type":
              "application/json; charset=UTF-8",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxY2IyNjE2N2U1MzAwMTVmYTY5OGEiLCJpYXQiOjE3MTU1ODc4NzgsImV4cCI6MTcxNjc5NzQ3OH0.SHSObFFhMqSfeMFXS-_CXSwSwcRHMZFVLB00JR8Xaz4",
          },
        }
      );
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
