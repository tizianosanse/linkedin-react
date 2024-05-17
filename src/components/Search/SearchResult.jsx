import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSearchAction } from "../../redux/actions/Search";
import { useDispatch, useSelector } from "react-redux";
import ExploreOpportunityCard from "../Jobs/ExploreOpportunityCard";

const SearchResult = () => {
  const dispatch = useDispatch();
  const query = useParams();

  const jobs = useSelector((state) => state.Search.searchJobs);

  useEffect(() => {
    dispatch(getSearchAction(query.query));
  }, []);

  return (
    <>
      <div className=" bg-white p-3 border border-1 exploreOpportunity search-page">
        {jobs.map((job) => {
          return (
            <ExploreOpportunityCard
              role={job.title}
              company={job.company_name}
              location={job.candidate_required_location}
              url={job.url}
              id={job._id}
              key={job._id}
            />
          );
        })}
      </div>
    </>
  );
};
export default SearchResult;
