import { Dropdown } from "react-bootstrap";

const FooterHome = () => {
  return (
    <>
      <div className="textColorLightGrey textP divFooterHome text-center text-decoration-none mt-4">
        <div className="d-flex justify-content-evenly m-1">
          <p> Informazioni</p>
          <p> Accessibilità </p>
        </div>
        <p> Centro assistenza </p>
        <Dropdown>
          <Dropdown.Toggle className="dropdownfooterHome p-1">Privacy e condizioni</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <p> Opzioni per gli annunci pubblicitari </p>
        <div className="d-flex justify-content-evenly m-1">
          <p> Pubblicità </p>

          <Dropdown>
            <Dropdown.Toggle className="dropdownfooterHome p-1">Servizi alle aziende</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex justify-content-evenly m-1">
          <p> Scarica la app LinkedIn</p>
          <p> Altro </p>
        </div>
        <p>
          <span className="mx-1 fw-bold" style={{ color: "#1766C1" }}>
            Linked
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="#1666c2"
              className="mercado-match "
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </span>
          <span className="text-dark">LinkedIn Corporation &copy; 2024</span>
        </p>
      </div>
    </>
  );
};
export default FooterHome;
