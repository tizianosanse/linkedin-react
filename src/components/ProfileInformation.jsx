import { useEffect, useState } from "react";
import { Col, Collapse, Form, Image, Modal, Row } from "react-bootstrap";
import { Button } from "react-bootstrap/esm";
import { useDispatch, useSelector } from "react-redux";
import { getInformation } from "../redux/actions/ProfileInformationActions";
import { Link } from "react-router-dom";
import pencil from "../assets/icons8-pencil-48.png";
import { PostExperienceAction } from "../redux/actions/Experience";

const ProfileInformation = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [open, setOpen] = useState(false);
  const information = useSelector((state) => state.ProfileInformation.content);
  const id = information._id;
  const [informationPut, setinformationPut] = useState({
    role: "",
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
    dispatch(PostExperienceAction(id, "POST", informationPut));
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
        <h3 className="lead d-inline-block me-2">{information.area} </h3>
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
          className="fw-semibold mt-3 rounded-pill ms-2  btn-alert"
          onClick={handleShow}
        >
          Aggiungi sezione del profilo
        </Button>
        <Button
          variant="outline-dark"
          className="fw-semibold mt-3 rounded-pill ms-2  btn-alert"
        >
          Altro
        </Button>
        <div className="DisponibileALavorare mt-4 p-3 w-50 rounded-3">
          <h3 className="mb-0 fw-semibold">Disponibile a lavorare</h3>
          <h2 className="mb-0 fw-normal">Ruoli di {information.title}</h2>
          <Link to={"/"} className="fw-semibold">
            Mostra dettagli
          </Link>
        </div>
        <Modal show={show} onHide={handleClose} animation={false} size="lg">
          <Modal.Header closeButton>
            <Modal.Title className="fs-5">Aggiungi al profilo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-grid gap-2">
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                size="lg"
                variant="light"
                className="bg-white border-0"
              >
                click
              </Button>
            </div>

            <Collapse in={open}>
              <div id="example-collapse-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </div>
            </Collapse>
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
          </Modal.Body>
        </Modal>
        <Modal show={show1} onHide={handleClose1} animation={false} size="lg">
          <Modal.Header className="px-4" closeButton>
            <Modal.Title className="fs-5">Aggiungi esperienza</Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-4">
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fw-light mb-0">Qualifica*</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  value={informationPut.title}
                  onChange={(e) => {
                    setinformationPut({
                      ...informationPut,
                      role: e.target.value,
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
                <Form.Label className="fw-light mb-0">Nome Azienda*</Form.Label>
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
                <Form.Label className="fw-light mb-0">Località*</Form.Label>
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
                <Form.Label className="fw-light mb-0">Descrizione*</Form.Label>
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
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => {
                        setinformationPut({
                          ...informationPut,
                          monthStart: e.target.value,
                        });
                      }}
                    >
                      <option>{informationPut.monthStart}</option>
                      <option value="1">Gennaio</option>
                      <option value="2">Febbraio</option>
                      <option value="3">Marzo</option>
                      <option value="4">Aprile</option>
                      <option value="5">Maggio</option>
                      <option value="6">Giugno</option>
                      <option value="7">Luglio</option>
                      <option value="8">Agosto</option>
                      <option value="9">Settembre</option>
                      <option value="10">Ottobre</option>
                      <option value="11">Novembre</option>
                      <option value="12">Dicembre</option>
                    </Form.Select>
                  </Col>
                  <Col xs={6}>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => {
                        setinformationPut({
                          ...informationPut,
                          yearStart: e.target.value,
                        });
                      }}
                    >
                      <option>{informationPut.yearStart}</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="fw-light mb-0">Data di fine*</Form.Label>
                <Row>
                  <Col xs={6}>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => {
                        setinformationPut({
                          ...informationPut,
                          monthEnd: e.target.value,
                        });
                      }}
                    >
                      <option>{informationPut.monthEnd}</option>
                      <option value="1">Gennaio</option>
                      <option value="2">Febbraio</option>
                      <option value="3">Marzo</option>
                      <option value="4">Aprile</option>
                      <option value="5">Maggio</option>
                      <option value="6">Giugno</option>
                      <option value="7">Luglio</option>
                      <option value="8">Agosto</option>
                      <option value="9">Settembre</option>
                      <option value="10">Ottobre</option>
                      <option value="11">Novembre</option>
                      <option value="12">Dicembre</option>
                    </Form.Select>
                  </Col>
                  <Col xs={6}>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => {
                        setinformationPut({
                          ...informationPut,
                          yearEnd: e.target.value,
                        });
                      }}
                    >
                      <option>{informationPut.yearEnd}</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                    </Form.Select>
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
