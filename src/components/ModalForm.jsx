import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteExperience,
  PostExperienceAction,
  PutExperienceAction,
  PutSingleExperience,
} from "../redux/actions/Experience";

import { handleUploadExperiencePictures } from "../redux/actions/UploadFile";
import { useNavigate } from "react-router-dom";

const ModalForm = (props) => {
  const information = useSelector(
    (state) => state.ProfileInformation.content
  );
  const navigate = useNavigate();
  const singleExpId = props.expId;

  const [showConfirmation, setConfirmation] =
    useState(false);
  const [imageExperience, setimageExperience] =
    useState(false);

  const id = information._id;
  const singleExp = useSelector(
    (state) => state.Experience.singleEperience
  );

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      PostExperienceAction(id, "POST", informationPut)
    );
    navigate("/DetailExperience");
  };
  const handleSubmitModify = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("experience", imageExperience);
    dispatch(
      PutExperienceAction(
        id,
        "PUT",
        informationMod,
        singleExpId
      )
    );
    dispatch(
      handleUploadExperiencePictures(
        formData,
        id,
        singleExpId
      )
    );
    navigate("/DetailExperience");
  };
  const handleDelete = () => {
    dispatch(DeleteExperience(id, singleExpId));
    navigate("/DetailExperience");
  };
  const handleConfimationClose = () => {
    setConfirmation(false);
  };

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
  const [informationMod, setInformationMod] = useState({
    role: "",
    companyName: "",
    area: "",
    monthStart: "Mese",
    monthEnd: "Mese",
    yearStart: "Anno",
    yearEnd: "Anno",
    description: "",
  });

  useEffect(() => {
    if (singleExpId) {
      dispatch(PutSingleExperience(id, "GET", singleExpId));
    }
  }, [id, singleExpId]);
  useEffect(() => {
    if (singleExp) {
      let dateStart = singleExp.startDate.split("-");

      let dateEnd = singleExp.endDate.split("-");
      console.log(dateStart);
      setInformationMod({
        role: singleExp.role,
        companyName: singleExp.company,
        area: singleExp.area,
        monthStart: dateStart[1].startsWith("0")
          ? dateStart[1].replace(/^0/, "")
          : dateStart[1],
        monthEnd: dateEnd[1].startsWith("0")
          ? dateEnd[1].replace(/^0/, "")
          : dateEnd[1],
        yearStart: dateStart[0],
        yearEnd: dateEnd[0],
        description: singleExp.description,
      });
    }
  }, [singleExp]);
  return (
    <>
      {props.putOrDeleteExperience && singleExp ? (
        <Modal
          show={props.show1}
          onHide={props.handleClose1}
          animation={false}
          size="lg"
        >
          <Modal.Header className="px-4" closeButton>
            <Modal.Title className="fs-5">
              Modifica esperienza
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-4">
            <Form onSubmit={handleSubmitModify}>
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
                  value={informationMod.role}
                  onChange={(e) => {
                    setInformationMod({
                      ...informationMod,
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
                  value={informationMod.company}
                  onChange={(e) => {
                    setInformationMod({
                      ...informationMod,
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
                  value={informationMod.area}
                  onChange={(e) => {
                    setInformationMod({
                      ...informationMod,
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
                  value={informationMod.description}
                  onChange={(e) => {
                    setInformationMod({
                      ...informationMod,
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
                  Immagine esperienza*
                </Form.Label>
                <Form.Control
                  size="sm"
                  type="file"
                  className="border-black "
                  onChange={(e) => {
                    setimageExperience(e.target.files[0]);
                  }}
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
                        {informationMod.monthStart}
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
                        {informationMod.yearStart}
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
                        {informationMod.monthEnd}
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
                        {informationMod.yearEnd}
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
                  variant="btn"
                  onClick={() => {
                    setConfirmation(true);
                  }}
                >
                  Elimina esperienza
                </Button>
                <Modal
                  show={showConfirmation}
                  onHide={handleConfimationClose}
                  size="sm"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Elimina esperienza
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Confermi di voler eliminare la
                    esperienza presso{" "}
                    {informationMod.companyName}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="outline-primary"
                      className="fw-semibold mt-3 rounded-pill ms-2  btn-alert"
                      onClick={handleConfimationClose}
                    >
                      No, grazie
                    </Button>
                    <Button
                      variant="primary"
                      className="fw-bold mt-3 rounded-pill btn-disponibile-per ms-md-2"
                      onClick={handleDelete}
                    >
                      Elimina
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button
                  className="rounded-pill px-3 modal-btn ms-auto"
                  type="submit"
                >
                  Modifica
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      ) : (
        <Modal
          show={props.show1}
          onHide={props.handleClose1}
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
      )}
    </>
  );
};
export default ModalForm;
