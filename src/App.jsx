import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import MyNavbar from "./components/MyNavbar";

import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <MyNavbar />
          <Routes>
            <ProfilePage />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
