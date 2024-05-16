import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProfileInformationReducer from "../reducers/ProfileInformationReducer";
import ProfilesReduces from "../reducers/ProfilesReducer";
import ExperienceReducer from "../reducers/Experience";
import PostReducer from "../reducers/Post";
import JobsReducer from "../reducers/Jobs";

const rootReducer = combineReducers({
  ProfileInformation: ProfileInformationReducer,
  Profiles: ProfilesReduces,
  Experience: ExperienceReducer,
  Post: PostReducer,
  Jobs: JobsReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
