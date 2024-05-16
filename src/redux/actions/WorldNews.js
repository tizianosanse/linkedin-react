export const GET_NEWS = "GET_NEWS";

export const getNewsAction = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=it&category=business&apiKey=a3f47afefac14afdb3acd791619ec298"
      );
      if (response.ok) {
        let data = await response.json();

        dispatch({ type: GET_NEWS, payload: data });
      } else {
        throw new Error("Error in fetching News");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
