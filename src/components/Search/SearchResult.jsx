import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSearchAction } from "../../redux/actions/Search";
import { useDispatch, useSelector } from "react-redux";
import ExploreOpportunityCard from "../Jobs/ExploreOpportunityCard";

const SearchResult = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const jobs = useSelector((state) => state.Search.searchJobs);
  console.log(jobs);
  useEffect(() => {
    dispatch(getSearchAction(params));
  }, []);

  return (
    <>
      <div className=" bg-white p-3 rounded-top-3 border border-1 exploreOpportunity">
        {jobs.map((job) => {
          console.log(job);
          return (
            <ExploreOpportunityCard
              role={job.title}
              company={job.company_name}
              location={job.candidate_required_location}
              url={job.url}
              key={job._id}
            />
          );
        })}
      </div>
    </>
  );
};
export default SearchResult;
