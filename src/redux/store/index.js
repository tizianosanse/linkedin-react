import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProfileInformationReducer from "../reducers/ProfileInformationReducer";
import ProfilesReduces from "../reducers/ProfilesReducer";
import ExperienceReducer from "../reducers/Experience";
import PostReducer from "../reducers/Post";
import JobsReducer from "../reducers/Jobs";
import WorldNewsReduces from "../reducers/WorldNews";

import LoadingReducer from "../reducers/Loading";

const rootReducer = combineReducers({
  ProfileInformation: ProfileInformationReducer,
  Profiles: ProfilesReduces,
  Experience: ExperienceReducer,
  Post: PostReducer,
  Jobs: JobsReducer,
  WorldNews: WorldNewsReduces,
  LoadingReduce: LoadingReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
