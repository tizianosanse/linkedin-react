import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MyNavbar from "./components/MyNavbar";

import ProfilePage from "./components/ProfilePage";
import Message from "./components/Message";
import ProfileFooter from "./components/ProfileFooter";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <MyNavbar />

          <ProfilePage />
          <Message />
          <ProfileFooter />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
