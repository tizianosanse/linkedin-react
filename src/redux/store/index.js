import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProfileInformationReducer from "../reducers/ProfileInformationReducer";

const rootReducer = combineReducers({
  ProfileInformation: ProfileInformationReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
