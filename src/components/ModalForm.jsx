import { useState } from "react";
import {
  Button,
  Col,
  Collapse,
  Form,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PostExperienceAction } from "../redux/actions/Experience";

const ModalForm = (props) => {
  const information = useSelector(
    (state) => state.ProfileInformation.content
  );
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const id = information._id;
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      PostExperienceAction(id, "POST", informationPut)
    );
  };
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
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
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        animation={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">
            Aggiungi al profilo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-grid gap-2">
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              size="lg"
              variant="light"
              className="bg-white border-0 d-flex align-items-center justify-content-between"
            >
              <p className="mb-0 fw-bold">
                Sezioni principali
              </p>
              <p className="mb-0 fw-bold">
                {open ? (
                  <i className="bi bi-caret-up"></i>
                ) : (
                  <i className="bi bi-caret-down"></i>
                )}{" "}
              </p>
            </Button>
          </div>

          <Collapse in={open}>
            <div id="example-collapse-text">
              <ListGroup>
                <ListGroup.Item>
                  <p className="fs-8 text-secondary mb-0 ">
                    Iniziamo dalle basi. Se compili queste
                    sezioni, sarà più facile trovarti per i
                    recluter e per le persone che potresti
                    conoscere
                  </p>
                </ListGroup.Item>

                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi grado di formazione
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p
                    className="fs-8 text-secondary mb-0 fw-bold"
                    onClick={() => {
                      props.setShow(false);
                      setShow1(true);
                    }}
                  >
                    {" "}
                    Aggiungi posizione lavorativa
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi pausa lavorativa
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi competenze
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Collapse>
          <div className="d-grid gap-2">
            <Button
              onClick={() => setOpen2(!open2)}
              aria-controls="example-collapse-text"
              aria-expanded={open2}
              size="lg"
              variant="light"
              className="bg-white border-0 d-flex align-items-center justify-content-between"
            >
              <p className="mb-0 fw-bold">
                Sezioni consigliate
              </p>
              <p className="mb-0 fw-bold">
                {open2 ? (
                  <i className="bi bi-caret-up"></i>
                ) : (
                  <i className="bi bi-caret-down"></i>
                )}{" "}
              </p>
            </Button>
          </div>

          <Collapse in={open2}>
            <div id="example-collapse-text">
              <ListGroup>
                <ListGroup.Item>
                  <p className="fs-8 text-secondary mb-0 ">
                    Completando queste sezioni aumenterai la
                    tua credibilità e potrei accedere a più
                    opportunità
                  </p>
                </ListGroup.Item>

                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi elementi in primo piano
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi licenze e certificazioni
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi progetti
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi corsi
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi referenze
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Collapse>
          <div className="d-grid gap-2">
            <Button
              onClick={() => setOpen3(!open3)}
              aria-controls="example-collapse-text"
              aria-expanded={open3}
              size="lg"
              variant="light"
              className="bg-white border-0 d-flex align-items-center justify-content-between"
            >
              <p className="mb-0 fw-bold">Altro</p>
              <p className="mb-0 fw-bold">
                {open3 ? (
                  <i className="bi bi-caret-up"></i>
                ) : (
                  <i className="bi bi-caret-down"></i>
                )}{" "}
              </p>
            </Button>
          </div>

          <Collapse in={open3}>
            <div id="example-collapse-text">
              <ListGroup>
                <ListGroup.Item>
                  <p className="fs-8 text-secondary mb-0 ">
                    Conferisci ancora più personalità al tuo
                    profilo. Queste sezioni ti aiuteranno a
                    espandere la tua rete e istaurare più
                    relazioni lavorative.
                  </p>
                </ListGroup.Item>

                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi esperienza di volontariato
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi pubblicazioni
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi brevetti
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi riconoscimenti e premi
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi votazioni esame
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi lingue
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi organizzazioni
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi cause
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Collapse>
        </Modal.Body>
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
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => {
                      setinformationPut({
                        ...informationPut,
                        monthStart: e.target.value,
                      });
                    }}
                  >
                    <option>
                      {informationPut.monthStart}
                    </option>
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
                    <option>
                      {informationPut.yearStart}
                    </option>
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
              <Form.Label className="fw-light mb-0">
                Data di fine*
              </Form.Label>
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
                    <option>
                      {informationPut.monthEnd}
                    </option>
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
                    <option>
                      {informationPut.yearEnd}
                    </option>
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
    </>
  );
};
export default ModalForm;
