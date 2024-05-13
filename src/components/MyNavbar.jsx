import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Image } from "react-bootstrap";
const MyNavbar = () => {
  return (
    <Navbar className="bg-light">
      <Container fluid className=" justify-content-evenly">
        <div className="d-flex align-items-center">
          <Navbar.Brand href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="#1666c2"
              className="mercado-match"
              width="40"
              height="40"
              focusable="false"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </Navbar.Brand>
          <Form className="d-flex position-relative">
            <Form.Control type="search" placeholder="Cerca" className="formCercaNavbar" aria-label="Search" />

            <div className="searchIconNavbar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#212529"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </div>
          </Form>
        </div>
        <Nav className=" my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
          <div className="divIconsNavbar">
            <p className="m-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#717171"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
              </svg>
            </p>
            <Nav.Link className="p-0" href="#action1">
              Home
            </Nav.Link>
          </div>
          <div className="divIconsNavbar">
            <p className="m-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#717171"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
              </svg>
            </p>
            <Nav.Link className="p-0" href="#action2">
              Rete
            </Nav.Link>
          </div>
          <div className="divIconsNavbar">
            <p className="m-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#717171"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
              </svg>
            </p>
            <Nav.Link className="p-0" href="#">
              Lavoro
            </Nav.Link>
          </div>
          <div className="divIconsNavbar">
            <p className="m-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#717171"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
              </svg>
            </p>
            <Nav.Link className="p-0" href="#">
              Messaggistica
            </Nav.Link>
          </div>
          <div className="divIconsNavbar">
            <p className="m-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#717171"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
              </svg>
            </p>
            <Nav.Link className="p-0" href="#">
              Notifiche
            </Nav.Link>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <Image
              src={"https://mhcid.washington.edu/wp-content/uploads/2021/12/placeholder-user-scaled.jpg"}
              width={26}
              height={26}
              className="imageUserNavbar"
            ></Image>

            <NavDropdown title="Tu" id="navbarScrollingDropdown" className="dropdownNavTu">
              <div className="d-flex">
                <Image
                  src={"https://mhcid.washington.edu/wp-content/uploads/2021/12/placeholder-user-scaled.jpg"}
                  width={40}
                  height={40}
                  className="imageUserNavbar m-2"
                ></Image>
                <div>
                  <NavDropdown.Item className="p-0 titleDropdownNav" href="#action3">
                    Nome Cognome
                  </NavDropdown.Item>
                  <NavDropdown.Item className="p-0" href="#action3">
                    Professione
                  </NavDropdown.Item>
                </div>
              </div>
              <div className="dropdownNavButtonDiv">
                <Button className="dropdownNavButton" variant="outline-primary ">
                  Visualizza profilo
                </Button>
              </div>
              <NavDropdown.Divider />

              <NavDropdown.Item href="#action4" className="titleDropdownNav">
                Account
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">Prova Premium per 0 EUR</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Impostazioni e privacy</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Guida</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Lingua</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className="titleDropdownNav">
                Gestisci
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">Post e attività</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Account per la pubblicazione di of..</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Esci</NavDropdown.Item>
            </NavDropdown>
          </div>
          <div className="divIconsNavbar perLeAziende">
            <p className="m-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#717171"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
              </svg>
            </p>
            <NavDropdown title="Per le aziende" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </div>

          <Nav.Link className="p-0 text-center networking" href="#">
            Fai networking in <br />
            modo smart con <br />
            Premium
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
