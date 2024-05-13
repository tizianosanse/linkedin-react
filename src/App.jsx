import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProfilePage />} path="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
