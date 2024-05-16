import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProfileInformationReducer from "../reducers/ProfileInformationReducer";
import ProfilesReduces from "../reducers/ProfilesReducer";
import ExperienceReducer from "../reducers/Experience";
import PostReducer from "../reducers/Post";
import WorldNewsReduces from "../reducers/WorldNews";

const rootReducer = combineReducers({
  ProfileInformation: ProfileInformationReducer,
  Profiles: ProfilesReduces,
  Experience: ExperienceReducer,
  Post: PostReducer,
  WorldNews: WorldNewsReduces,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
