import { useLocation } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import NavbarJob from "./Jobs/NavbarJob";

const ConditionalNav = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.includes("search") ? (
        <NavbarJob />
      ) : (
        <MyNavbar />
      )}
    </>
  );
};
export default ConditionalNav;
