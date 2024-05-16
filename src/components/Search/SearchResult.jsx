import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSearchAction } from "../../redux/actions/Search";
import { useDispatch } from "react-redux";

const SearchResult = () => {
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getSearchAction());
  }, []);

  return (
    <>
      <div></div>
    </>
  );
};
export default SearchResult;
