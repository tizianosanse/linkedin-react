export const GET_JOBS = "GET_JOBS";
export const GET_NETWORK_JOBS = "GET_NETWORK_JOBS";
export const GET_MORE_JOBS = "GET_MORE_JOBS";
export const JOBS_PREMIUM = "JOBS_PREMIUM";
const initialState = {
  exploreJobs: [],
  networkJobs: [],
  moreJobs: [],
  premiumJobs: [],
};

const Jobs = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        exploreJobs: action.payload,
      };
    case GET_NETWORK_JOBS:
      return {
        ...state,
        networkJobs: action.payload,
      };
    case GET_MORE_JOBS:
      return {
        ...state,
        moreJobs: action.payload,
      };
    case JOBS_PREMIUM:
      return {
        ...state,
        premiumJobs: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default Jobs;
