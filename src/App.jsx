import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";

import ProfilePage from "./components/ProfilePage";
import Message from "./components/Message";
import ProfileFooter from "./components/ProfileFooter";
import DetailExperience from "./components/DetailExperience";

import MyHome from "./components/Homepage/MyHome";
import Jobs from "./components/Jobs/Jobs";
import Search from "./components/Search/Search";
import NotFound from "./components/NotFound";
import ConditionalNav from "./components/ConditionalNav";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <ConditionalNav />
          <Routes>
            <Route path={"/"} element={<MyHome />} />
            <Route
              path="/profilePage/:idProfile"
              element={
                <>
                  <ProfilePage />
                  <Message />
                  <ProfileFooter />
                </>
              }
            />
            <Route
              path="/DetailExperience"
              element={
                <>
                  <DetailExperience />
                  <Message />
                  <ProfileFooter />
                </>
              }
            />
            <Route path="/jobs" element={<Jobs />} />
            <Route
              path="/search/:query"
              element={<Search />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
