import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import ProfileInformationReducer from "../reducers/ProfileInformationReducer";
import ProfilesReduces from "../reducers/ProfilesReducer";
import ExperienceReducer from "../reducers/Experience";

const rootReducer = combineReducers({
  ProfileInformation: ProfileInformationReducer,
  Profiles: ProfilesReduces,
  Experience: ExperienceReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
