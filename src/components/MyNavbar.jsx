import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Col, Image, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getInformationNavBar } from "../redux/actions/ProfileInformationActions";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import ModalInformation from "./ModalInformation";

const MyNavbar = () => {
  const information = useSelector((state) => state.ProfileInformation.informationNav);
  const [showProva, setShowProva] = useState(false);
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleChange = (value) => {
    setQuery(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search/" + query);
  };
  const handleClose = () => setShow(false);
  const [showInputSearch, setShowInputSearch] = useState(false);
  console.log(show);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const [showModalSearch, setShowModalSearch] = useState(false);

  const handleCloseModalSearch = () => {
    setShowModalSearch(false);
    setShowInputSearch(false);
  };
  const handleShowModalSearch = () => setShowModalSearch(true);
  const location = useLocation();

  window.addEventListener("scroll", () => {
    if (window.scrollY > 600 && location.pathname === "/profilePage/me") {
      setShowProva(true);
    } else {
      setShowProva(false);
    }
  });
  useEffect(() => {
    dispatch(getInformationNavBar());
  }, []);
  return (
    <>
      <Navbar className="bg-white p-0 navbarContainer d-flex flex-column">
        <Container fluid className=" justify-content-evenly">
          <div className="d-flex align-items-center">
            <NavLink className={"nav-brand"} to={"/"}>
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
            </NavLink>
            {showInputSearch === false && (
              <span
                className="d-block d-md-none"
                onClick={() => {
                  setShowInputSearch(true);
                  handleShowModalSearch();
                }}
              >
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
              </span>
            )}
            <Modal show={showModalSearch} onHide={handleCloseModalSearch}>
              <Modal.Header className="d-flex justify-content-center">
                {showInputSearch && (
                  <Form className="d-flex position-relative d-block d-md-none">
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
                )}
              </Modal.Header>
              <Modal.Body>Nessuna ricerca</Modal.Body>
            </Modal>
            <Form className="d-flex position-relative d-none d-md-block" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Cerca"
                className="formCercaNavbar"
                aria-label="Search"
                value={query}
                onChange={(e) => handleChange(e.target.value)}
              />

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
          {showInputSearch === false && (
            <Nav className=" my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <div className="divIconsNavbar">
                <p className="m-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match hoverColorBlack"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
                  </svg>
                </p>
                <NavLink className="p-0 d-none d-lg-block nav-link" to={"/"}>
                  Home
                </NavLink>
              </div>
              <div className="divIconsNavbar">
                <p className="m-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match hoverColorBlack"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                  </svg>
                </p>
                <Nav.Link className="p-0 d-none d-lg-block" href="#action2">
                  Rete
                </Nav.Link>
              </div>
              <div className="divIconsNavbar">
                <p className="m-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match hoverColorBlack"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                  </svg>
                </p>
                <Nav.Link className="p-0 d-none d-lg-block" href="/jobs">
                  Lavoro
                </Nav.Link>
              </div>
              <div className="divIconsNavbar">
                <p className="m-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match hoverColorBlack"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                  </svg>
                </p>
                <Nav.Link className="p-0 d-none d-lg-block" href="#">
                  Messaggistica
                </Nav.Link>
              </div>
              <div className="divIconsNavbar">
                <p className="m-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match hoverColorBlack"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                  </svg>
                </p>
                <Nav.Link className="p-0 d-none d-lg-block" href="#">
                  Notifiche
                </Nav.Link>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                {information ? (
                  <Image src={information.image} width={27} height={27} className="imageUserNavbar "></Image>
                ) : (
                  <Image
                    src={"https://mhcid.washington.edu/wp-content/uploads/2021/12/placeholder-user-scaled.jpg"}
                    width={27}
                    height={27}
                    className="imageUserNavbar "
                  ></Image>
                )}

                <NavDropdown title="Tu" id="navbarScrollingDropdown" className="dropdownNavTu">
                  <div className="d-flex align-items-center">
                    {information ? (
                      <Image src={information.image} width={50} height={50} className="imageUserNavbar m-2"></Image>
                    ) : (
                      <Image
                        src={"https://mhcid.washington.edu/wp-content/uploads/2021/12/placeholder-user-scaled.jpg"}
                        width={50}
                        height={50}
                        className="imageUserNavbar m-2"
                      ></Image>
                    )}

                    <div>
                      <NavDropdown.Item className="p-0 titleDropdownNav" href="#action3">
                        {information.name}
                        {information.surname}
                      </NavDropdown.Item>
                      <NavDropdown.Item className="p-0" href="#action3">
                        {information.title}
                      </NavDropdown.Item>
                    </div>
                  </div>
                  <div className="dropdownNavButtonDiv">
                    <Link className="btn btn-outline-primary dropdownNavButton" to={"/profilePage/me"}>
                      Visualizza profilo
                    </Link>
                  </div>
                  <NavDropdown.Divider />

                  <NavDropdown.Item href="#action4" className="titleDropdownNav">
                    Account
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5" className=" d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="#bf9927"
                      className="bi bi-gem"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z" />
                    </svg>
                    <span className="provaPremiumNavbarDropdown">Prova Premium per 0 EUR</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="textColorLightGrey" href="#action5">
                    Impostazioni e privacy
                  </NavDropdown.Item>
                  <NavDropdown.Item className="textColorLightGrey" href="#action5">
                    Guida
                  </NavDropdown.Item>
                  <NavDropdown.Item className="textColorLightGrey" href="#action5">
                    Lingua
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5" className="titleDropdownNav">
                    Gestisci
                  </NavDropdown.Item>
                  <NavDropdown.Item className="textColorLightGrey" href="#action5">
                    Post e attività
                  </NavDropdown.Item>
                  <NavDropdown.Item className="textColorLightGrey" href="#action5">
                    Account per la pubblicazione di of..
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="textColorLightGrey" href="#action5">
                    Esci
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              {/* seconda dropdown */}
              <div className="divIconsNavbar perLeAziende">
                <p className="m-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match hoverColorBlack"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                  </svg>
                </p>
                <NavDropdown title="Per le aziende" id="navbarScrollingDropdown" className="dropdownMenuAziende">
                  <Row>
                    <Col xs={6}>
                      <NavDropdown.Item href="#" className="font-weight-bold">
                        Le mie app
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 40 40"
                          data-supported-dps="40x40"
                          width="40"
                          height="40"
                          focusable="false"
                        >
                          <defs>
                            <linearGradient
                              id="app-sales-navigator-@1-a"
                              x1="40.53"
                              y1="-53.4"
                              x2="20.23"
                              y2="19.17"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="#665ed0"></stop>
                              <stop offset="1" stopColor="#0073b1"></stop>
                            </linearGradient>
                          </defs>
                          <circle cx="20" cy="20" r="14" fill="url(#app-sales-navigator-@1-a)"></circle>
                          <path
                            d="M17.17 17.17L27.42 12a.4.4 0 01.18 0 .39.39 0 01.4.39.42.42 0 010 .19l-5.17 10.25z"
                            fill="#fff"
                          ></path>
                          <path
                            d="M17.17 17.17L12 27.42a.42.42 0 000 .19.39.39 0 00.37.38.45.45 0 00.21 0l10.25-5.12z"
                            fill="#98d8f4"
                          ></path>
                          <circle cx="20" cy="20" r="4" fill="#fff"></circle>
                          <circle cx="20" cy="20" r="2" fill="#0073b1"></circle>
                        </svg>
                        Vendi
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 40 40"
                          data-supported-dps="40x40"
                          width="40"
                          height="40"
                          focusable="false"
                        >
                          <defs>
                            <linearGradient
                              id="app-groups-@1-b"
                              x1="1.84"
                              y1="-24.59"
                              x2="20.66"
                              y2="25.05"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="#665ed0"></stop>
                              <stop offset="1" stopColor="#0073b1"></stop>
                            </linearGradient>
                            <clipPath id="app-groups-@1-a">
                              <path
                                d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                                fill="none"
                              ></path>
                            </clipPath>
                          </defs>
                          <path
                            d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                            fill="#caedff"
                          ></path>
                          <circle cx="29" cy="16" r="3" fill="#0091ca"></circle>
                          <circle cx="11" cy="16" r="3" fill="#0091ca"></circle>
                          <g clipPath="url(#app-groups-@1-a)">
                            <path
                              d="M20 18a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v16h6V20z"
                              fill="url(#app-groups-@1-b)"
                            ></path>
                            <path fill="#0091ca" d="M26 21h6v14h-6zM8 21h6v14H8z"></path>
                          </g>
                        </svg>
                        Gruppi
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#" className="textColorLightGrey">
                        Talent
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 40 40"
                          data-supported-dps="40x40"
                          width="40"
                          height="40"
                          focusable="false"
                        >
                          <defs>
                            <linearGradient
                              id="app-talent-insights-medium-a"
                              x1="34.05"
                              y1="44.47"
                              x2="13.67"
                              y2="19.5"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="#665ed0"></stop>
                              <stop offset="1" stopColor="#0073b1"></stop>
                            </linearGradient>
                          </defs>
                          <path d="M25 6H10a1 1 0 00-1 1v25a1 1 0 001 1h20a1 1 0 001-1V12z" fill="#caedff"></path>
                          <path fill="#65c3e8" d="M25 6v6h6l-6-6z"></path>
                          <path
                            d="M20 19a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v12h6zm8 11v-8h-5v9h4a1 1 0 001-1zm-17-5H9v5a1 1 0 001 1h4z"
                            fill="url(#app-talent-insights-medium-a)"
                          ></path>
                        </svg>
                        Talent Insights
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 40 40"
                          data-supported-dps="40x40"
                          width="40"
                          height="40"
                          focusable="false"
                        >
                          <defs>
                            <linearGradient
                              id="app-jobs-posting-@1-a"
                              x1="-6.68"
                              y1="-1"
                              x2="25.05"
                              y2="26.36"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="#665ed0"></stop>
                              <stop offset="1" stopColor="#0073b1"></stop>
                            </linearGradient>
                          </defs>
                          <path
                            fill="none"
                            stroke="#caedff"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            d="M20 8.67l-4 6.66M20 8.67l4 6.66"
                          ></path>
                          <rect
                            x="8"
                            y="14"
                            width="24"
                            height="16"
                            rx="1"
                            ry="1"
                            fill="url(#app-jobs-posting-@1-a)"
                          ></rect>
                          <path fill="#65c3e8" d="M12 18h16v3H12z"></path>
                          <path fill="#33aada" d="M15 23h10v3H15z"></path>
                          <circle cx="20" cy="9" r="2" fill="#65c3e8"></circle>
                        </svg>
                        Pubblica un offerta di lavoro
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#" className="textColorLightGrey">
                        Vendite
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 40 40"
                          data-supported-dps="40x40"
                          width="40"
                          height="40"
                          focusable="false"
                        >
                          <circle cx="20" cy="12" r="4" fill="#0073b1"></circle>
                          <path
                            d="M31.88 13.46L16.17 29.17 18 31a1.37 1.37 0 002 0l14.71-14.71a1.13 1.13 0 00.29-.8.89.89 0 00-.29-.61l-1.41-1.42a1 1 0 00-1.42 0z"
                            fill="#0091ca"
                          ></path>
                          <path
                            d="M21.83 29.17L20 31a1.35 1.35 0 01-1 .4 1.36 1.36 0 01-1-.4l-8.71-8.71a1 1 0 010-1.41l1.41-1.41a1.07 1.07 0 01.76-.29.94.94 0 01.65.29z"
                            fill="#33aada"
                            opacity=".8"
                          ></path>
                          <path fill="#0073b1" d="M19 26.34l4-4V18h-6v6.34l2 2z"></path>
                        </svg>
                        Marketplace dei servizi
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#" className="textColorLightGrey">
                        Marketing
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 40 40"
                          data-supported-dps="40x40"
                          width="40"
                          height="40"
                          focusable="false"
                        >
                          <defs>
                            <linearGradient
                              id="app-ads-@1-a"
                              x1="34.78"
                              y1="3.84"
                              x2="14.66"
                              y2="25.84"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="#665ed0"></stop>
                              <stop offset="1" stopColor="#0073b1"></stop>
                            </linearGradient>
                          </defs>
                          <g fill="url(#app-ads-@1-a)">
                            <path d="M20 11.88A8.13 8.13 0 1111.88 20 8.13 8.13 0 0120 11.88M20 9a11 11 0 1011 11A11 11 0 0020 9z"></path>
                            <circle cx="20" cy="20" r="4"></circle>
                          </g>
                          <circle cx="20" cy="20" r="2" transform="rotate(-45 20.002 19.995)" fill="#33aada"></circle>
                          <path fill="#33aada" d="M24.246 12.932l2.829 2.828-5.657 5.657-2.828-2.829z"></path>
                          <path
                            fill="#33aada"
                            d="M29.19 16.46l-4.95-.7-.7-4.95 4.94-4.95L29 11l5.14.52-4.95 4.94z"
                          ></path>
                        </svg>
                        Pubblicizza
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#" className="textColorLightGrey">
                        Learning
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 40 40"
                          data-supported-dps="40x40"
                          width="40"
                          height="40"
                          focusable="false"
                        >
                          <defs>
                            <linearGradient
                              id="app-learning-@1-a"
                              x1="7.18"
                              y1="6.98"
                              x2="13.8"
                              y2="20.22"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="#33aada"></stop>
                              <stop offset="1" stopColor="#0091ca"></stop>
                            </linearGradient>
                            <linearGradient
                              id="app-learning-@1-b"
                              x1="12.96"
                              y1="-17.55"
                              x2="27.9"
                              y2="24.33"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="#665ed0"></stop>
                              <stop offset="1" stopColor="#0073b1"></stop>
                            </linearGradient>
                          </defs>
                          <path d="M20 30H8a1 1 0 01-1-1V11a1 1 0 011-1h12v20z" fill="url(#app-learning-@1-a)"></path>
                          <path d="M20 10h12a1 1 0 011 1v18a1 1 0 01-1 1H20V10z" fill="url(#app-learning-@1-b)"></path>
                          <path fill="#33aada" d="M9 19h8v2H9zM9 23h8v2H9zM9 15h8v2H9z"></path>
                          <path fill="#006097" d="M23 19h8v2h-8zM23 23h8v2h-8zM23 15h8v2h-8z"></path>
                          <path
                            d="M17.41 15.25l7.46 4.52a.27.27 0 010 .46l-7.46 4.52a.27.27 0 01-.41-.23v-9a.27.27 0 01.41-.27z"
                            fill="#fff"
                          ></path>
                        </svg>
                        Learning
                      </NavDropdown.Item>
                    </Col>
                    <Col xs={6} className="scopriAltro">
                      <NavDropdown.Item href="#action4" className="font-weight-bold">
                        Scopri altro per il business
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        <h6 className="m-0">Assumi su Linkedin</h6>
                        <span className="spanDropdownNavbar">Trova,attrai e assumi</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        <h6 className="m-0">Vendi con Linkedin</h6>
                        <span className="spanDropdownNavbar">Sblocca nuove opportunità di vendita</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        <h6 className="m-0">Offerta di lavoro gratuita</h6>
                        <span className="spanDropdownNavbar">Ottieni rapidamente candidati qualificati</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        <h6 className="m-0">Fai pubblicità su Linkedin</h6>
                        <span className="spanDropdownNavbar">Acquisisci clienti e fai crescere la tua azienda</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        <h6 className="m-0">Inizia con Premium</h6>
                        <span className="spanDropdownNavbar">Amplia e sfrutta la tua rete</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        <h6 className="m-0">Impara con Linkedin</h6>
                        <span className="spanDropdownNavbar">Assumi su Linkedin</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        <h6 className="m-0">Centro amministrazione</h6>
                        <span className="spanDropdownNavbar">Gestisci i dettagli di fatturazione e account </span>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        <h6 className="m-0">Crea una pagina aziendale +</h6>
                      </NavDropdown.Item>
                    </Col>
                  </Row>
                </NavDropdown>
              </div>

              <Nav.Link className="p-0 text-center networking d-none d-lg-block">
                Fai networking in <br />
                modo smart con <br />
                Premium
              </Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>{" "}
      <div
        style={{ width: "100%" }}
        className={"subNavbar d-none d-md-block pt-3 " + (showProva ? "subNavShow" : "subNavHide")}
      >
        <Col xs={12} className="d-flex justify-content-between" style={{ width: "85%", marginInline: "auto" }}>
          <div className="d-flex align-items-center">
            {information ? (
              <Image src={information.image} width={35} height={35} className="imageUserNavbar m-2"></Image>
            ) : (
              <Image
                src={"https://mhcid.washington.edu/wp-content/uploads/2021/12/placeholder-user-scaled.jpg"}
                width={35}
                height={35}
                className="imageUserNavbar m-2"
              ></Image>
            )}
            <div>
              <p className="p-0 m-0 titleDropdownNav" href="#">
                {information.name}
                {information.surname}
              </p>
              <p className="p-0 m-0 lavoroSubNavbar" href="#">
                {information.title}
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Button variant="outline-dark" className="fw-semibold rounded-pill btn-altro ">
              Altro
            </Button>
            <Button
              variant="outline-primary"
              className="fw-semibold  rounded-pill btn-aggiungi-sezione"
              onClick={handleShow}
            >
              Aggiungi sezione del profilo
            </Button>
            <Button variant="primary" className="fw-bold rounded-pill btn-disponibile-per ">
              Disponibile per
            </Button>
          </div>
        </Col>
      </div>
      <ModalInformation show={show} handleClose={handleClose} />
    </>
  );
};

export default MyNavbar;
