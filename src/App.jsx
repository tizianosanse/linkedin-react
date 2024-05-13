import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MyNavbar from "./components/MyNavbar";

import ProfilePage from "./components/ProfilePage";
import Message from "./components/Message";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <MyNavbar />

          <ProfilePage />
          <Message />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
