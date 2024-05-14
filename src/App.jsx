import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import MyNavbar from "./components/MyNavbar";

import ProfilePage from "./components/ProfilePage";
import Message from "./components/Message";
import ProfileFooter from "./components/ProfileFooter";
import DetailExperience from "./components/DetailExperience";
import ModalForm from "./components/ModalForm";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <MyNavbar />
          <Routes>
            <Route
              path="/"
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
            <Route
              path="/form/:singleExpId"
              element={
                <ModalForm putOrDeleteExperience={true} />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
