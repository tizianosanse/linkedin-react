import { useEffect, useState } from "react";
import {
  Col,
  Dropdown,
  Form,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { Button } from "react-bootstrap/esm";
import { useDispatch, useSelector } from "react-redux";
import { getInformation } from "../redux/actions/ProfileInformationActions";
import { Link } from "react-router-dom";
import pencil from "../assets/icons8-pencil-48.png";

const ProfileInformation = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const information = useSelector(
    (state) => state.ProfileInformation.content
  );
  const id = information._id;
  const [informationPut, setinformationPut] = useState({
    title: "",
    companyName: "",
    area: "",
    monthStart: "Mese",
    monthEnd: "Mese",
    yearStart: "Anno",
    yearEnd: "Anno",
    description: "",
  });
  console.log(id);
  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInformation());
  }, []);

  return (
    <>
      <div className=" mt-2 position-relative">
        <Image
          src="https://media.licdn.com/dms/image/C4D12AQHMPBvE3avWzg/article-inline_image-shrink_1000_1488/0/1616872522462?e=1720051200&v=beta&t=SM7tWeubIJQskb6VjQynq66L5UQjrV8ASWrpfitxJQI"
          alt="background profile"
          className="backgroundProfileImage  w-100 rounded-top-4"
        />
        <div className="d-flex position-absolute top-0 end-0 mt-5 me-4 border rounded-circle p-2 bg-white photocamera">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            height="15px"
            width="15px"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 487 487"
          >
            <g>
              <g>
                <path d="M308.1,277.95c0,35.7-28.9,64.6-64.6,64.6s-64.6-28.9-64.6-64.6s28.9-64.6,64.6-64.6S308.1,242.25,308.1,277.95z     M440.3,116.05c25.8,0,46.7,20.9,46.7,46.7v122.4v103.8c0,27.5-22.3,49.8-49.8,49.8H49.8c-27.5,0-49.8-22.3-49.8-49.8v-103.9    v-122.3l0,0c0-25.8,20.9-46.7,46.7-46.7h93.4l4.4-18.6c6.7-28.8,32.4-49.2,62-49.2h74.1c29.6,0,55.3,20.4,62,49.2l4.3,18.6H440.3z     M97.4,183.45c0-12.9-10.5-23.4-23.4-23.4c-13,0-23.5,10.5-23.5,23.4s10.5,23.4,23.4,23.4C86.9,206.95,97.4,196.45,97.4,183.45z     M358.7,277.95c0-63.6-51.6-115.2-115.2-115.2s-115.2,51.6-115.2,115.2s51.6,115.2,115.2,115.2S358.7,341.55,358.7,277.95z" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="ProfileInformation p-4 rounded-bottom-4 border border-1 position-relative">
        <Image
          src={information.image}
          alt="Profile picture"
          width={150}
          height={150}
          className="rounded-circle position-absolute border border-white border-5 "
        />
        <div className="d-flex position-absolute top-0 end-0 mt-3 me-4 pencil1 rounded-circle p-1">
          <Image src={pencil} width={30} height={30} />
        </div>
        <h1 className="fs-3 mb-0 mt-5 ">
          {information.name}
          {information.surname}
        </h1>
        <h2 className="fw-normal">{information.title}</h2>
        <h3 className="lead d-inline-block me-2">
          {information.area}{" "}
        </h3>
        <Link to={"/"} className="fw-semibold">
          Informazioni di contatto
        </Link>
        <div>
          <Link to={"/"} className="fw-semibold mt-2">
            5 collegamenti
          </Link>
        </div>
        <Button
          variant="primary"
          className="fw-bold mt-3 rounded-pill btn-disponibile-per ms-md-2"
        >
          Disponibile per
        </Button>
        <Button
          variant="outline-primary"
          className="fw-semibold mt-3 rounded-pill ms-2 btn-aggiungi-sezione"
          onClick={handleShow}
        >
          Aggiungi sezione del profilo
        </Button>
        <Button
          variant="outline-dark"
          className="fw-semibold mt-3 rounded-pill ms-2 btn-altro"
        >
          Altro
        </Button>
        <div className="DisponibileALavorare mt-4 p-3 w-50 rounded-3">
          <h3 className="mb-0 fw-semibold">
            Disponibile a lavorare
          </h3>
          <h2 className="mb-0 fw-normal">
            Ruoli di {information.title}
          </h2>
          <Link to={"/"} className="fw-semibold">
            Mostra dettagli
          </Link>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title className="fs-5">
              Aggiungi al profilo
            </Modal.Title>
          </Modal.Header>
          <Link
            to={"/"}
            onClick={() => {
              setShow(false);
              setShow1(true);
            }}
            className="fs-10"
          >
            Aggiungi posizione lavorativa
          </Link>
        </Modal>
        <Modal
          show={show1}
          onHide={handleClose1}
          animation={false}
          size="lg"
        >
          <Modal.Header className="px-4" closeButton>
            <Modal.Title className="fs-5">
              Aggiungi esperienza
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-4">
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fw-light mb-0">
                  Qualifica*
                </Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  value={informationPut.title}
                  onChange={(e) => {
                    setinformationPut({
                      ...informationPut,
                      title: e.target.value,
                    });
                  }}
                  placeholder="Esempio: Retail Sales Manager"
                  className="border-black "
                />
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="fw-light mb-0">
                  Nome Azienda*
                </Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  value={informationPut.companyName}
                  onChange={(e) => {
                    setinformationPut({
                      ...informationPut,
                      companyName: e.target.value,
                    });
                  }}
                  placeholder="Esempio: Microsoft"
                  className="border-black "
                />
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="fw-light mb-0">
                  Località*
                </Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  value={informationPut.area}
                  onChange={(e) => {
                    setinformationPut({
                      ...informationPut,
                      area: e.target.value,
                    });
                  }}
                  placeholder="Esempio: Milano, Italia"
                  className="border-black "
                />
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="fw-light mb-0">
                  Descrizione*
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={informationPut.description}
                  onChange={(e) => {
                    setinformationPut({
                      ...informationPut,
                      description: e.target.value,
                    });
                  }}
                  placeholder=""
                  className="border-black "
                />
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="fw-light mb-0">
                  Data di inizio*
                </Form.Label>
                <Row>
                  <Col xs={6}>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-dark"
                        className="dropdown-form w-100 d-flex align-items-center"
                        id="dropdown-basic"
                      >
                        <p
                          className="me-auto mb-0 "
                          style={{ fontSize: "14px" }}
                        >
                          {informationPut.monthStart}
                        </p>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="w-100">
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "01",
                              "monthStart"
                            );
                          }}
                        >
                          Gennaio
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "02",
                              "monthStart"
                            );
                          }}
                        >
                          Febbraio
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "03",
                              "monthStart"
                            );
                          }}
                        >
                          Marzo
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "04",
                              "monthStart"
                            );
                          }}
                        >
                          Aprile
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "05",
                              "monthStart"
                            );
                          }}
                        >
                          Maggio
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "06",
                              "monthStart"
                            );
                          }}
                        >
                          Giugno
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "07",
                              "monthStart"
                            );
                          }}
                        >
                          Luglio
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "08",
                              "monthStart"
                            );
                          }}
                        >
                          Agosto
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "09",
                              "monthStart"
                            );
                          }}
                        >
                          Settembre
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "10",
                              "monthStart"
                            );
                          }}
                        >
                          Ottobre
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "11",
                              "monthStart"
                            );
                          }}
                        >
                          Novembre
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "11",
                              "monthStart"
                            );
                          }}
                        >
                          Dicembre
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Col xs={6}>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-dark"
                        className="dropdown-form w-100 d-flex align-items-center"
                        id="dropdown-basic"
                      >
                        <p
                          className="me-auto mb-0 "
                          style={{ fontSize: "14px" }}
                        >
                          {informationPut.yearStart}
                        </p>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="w-100">
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2024",
                              "yearStart"
                            );
                          }}
                        >
                          2024
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2023",
                              "yearStart"
                            );
                          }}
                        >
                          2023
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2022",
                              "yearStart"
                            );
                          }}
                        >
                          2022
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2021",
                              "yearStart"
                            );
                          }}
                        >
                          2021
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2020",
                              "yearStart"
                            );
                          }}
                        >
                          2020
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2019",
                              "yearStart"
                            );
                          }}
                        >
                          2019
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2018",
                              "yearStart"
                            );
                          }}
                        >
                          2018
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2017",
                              "yearStart"
                            );
                          }}
                        >
                          2017
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2016",
                              "yearStart"
                            );
                          }}
                        >
                          2016
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2015",
                              "yearStart"
                            );
                          }}
                        >
                          2015
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2014",
                              "yearStart"
                            );
                          }}
                        >
                          2014
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2013",
                              "yearStart"
                            );
                          }}
                        >
                          2013
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="fw-light mb-0">
                  Data di fine*
                </Form.Label>
                <Row>
                  <Col xs={6}>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-dark"
                        className="dropdown-form w-100 d-flex align-items-center"
                        id="dropdown-basic"
                      >
                        <p
                          className="me-auto mb-0 "
                          style={{ fontSize: "14px" }}
                        >
                          {informationPut.monthEnd}
                        </p>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="w-100">
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "01",
                              "monthEnd"
                            );
                          }}
                        >
                          Gennaio
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "02",
                              "monthEnd"
                            );
                          }}
                        >
                          Febbraio
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "03",
                              "monthEnd"
                            );
                          }}
                        >
                          Marzo
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "04",
                              "monthEnd"
                            );
                          }}
                        >
                          Aprile
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "05",
                              "monthEnd"
                            );
                          }}
                        >
                          Maggio
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "06",
                              "monthEnd"
                            );
                          }}
                        >
                          Giugno
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "07",
                              "monthEnd"
                            );
                          }}
                        >
                          Luglio
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "08",
                              "monthEnd"
                            );
                          }}
                        >
                          Agosto
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "09",
                              "monthEnd"
                            );
                          }}
                        >
                          Settembre
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "10",
                              "monthEnd"
                            );
                          }}
                        >
                          Ottobre
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "11",
                              "monthEnd"
                            );
                          }}
                        >
                          Novembre
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleMonthClick(
                              "11",
                              "monthEnd"
                            );
                          }}
                        >
                          Dicembre
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Col xs={6}>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-dark"
                        className="dropdown-form w-100 d-flex align-items-center mb-4"
                        id="dropdown-basic"
                      >
                        <p
                          className="me-auto mb-0 "
                          style={{ fontSize: "14px" }}
                        >
                          {informationPut.yearEnd}
                        </p>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="w-100">
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2024",
                              "yearEnd"
                            );
                          }}
                        >
                          2024
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2023",
                              "yearEnd"
                            );
                          }}
                        >
                          2023
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2022",
                              "yearEnd"
                            );
                          }}
                        >
                          2022
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2021",
                              "yearEnd"
                            );
                          }}
                        >
                          2021
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2020",
                              "yearEnd"
                            );
                          }}
                        >
                          2020
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2019",
                              "yearEnd"
                            );
                          }}
                        >
                          2019
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2018",
                              "yearEnd"
                            );
                          }}
                        >
                          2018
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2017",
                              "yearEnd"
                            );
                          }}
                        >
                          2017
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2016",
                              "yearEnd"
                            );
                          }}
                        >
                          2016
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2015",
                              "yearEnd"
                            );
                          }}
                        >
                          2015
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2014",
                              "yearEnd"
                            );
                          }}
                        >
                          2014
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="drowdown-item"
                          onClick={() => {
                            handleYearClick(
                              "2013",
                              "yearEnd"
                            );
                          }}
                        >
                          2013
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </Form.Group>

              <div className="border-top p-3 d-flex">
                <Button
                  className="rounded-pill px-3 modal-btn ms-auto"
                  type="submit"
                >
                  Salva
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ProfileInformation;
