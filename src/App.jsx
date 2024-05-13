import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MyNavbar from "./components/MyNavbar";

import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <MyNavbar />

          <ProfilePage />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
