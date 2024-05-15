import { useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { Button } from "react-bootstrap/esm";
import { useDispatch, useSelector } from "react-redux";
import { getInformation } from "../redux/actions/ProfileInformationActions";
import { Link } from "react-router-dom";
import pencil from "../assets/icons8-pencil-48.png";
import { handleUploadProfilePictures } from "../redux/actions/UploadFile";

import ModalInformation from "./ModalInformation";

const ProfileInformation = (props) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [file, setFile] = useState();

  const information = useSelector(
    (state) => state.ProfileInformation.content
  );

  const handleClose = () => setShow2(false);

  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInformation(props.idProfile));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.idProfile]);

  const getUploadImg = () => {
    const formData = new FormData();
    formData.append("profile", file);
    dispatch(
      handleUploadProfilePictures(formData, information._id)
    );
  };
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
        {!show2 && (
          <Image
            onClick={handleShow2}
            src={information.image}
            alt="Profile picture"
            width={150}
            height={150}
            className="rounded-circle position-absolute border border-white border-5 "
          />
        )}
        {show2 && (
          <>
            <Modal show={show2} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                <Card>
                  <div>
                    <input
                      type="file"
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                      }}
                    />
                  </div>
                </Card>
              </Modal.Header>
              <Modal.Body></Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={handleClose}
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={getUploadImg}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )}
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
        <Link to={"/"} className="fw-semibold d-block">
          Informazioni di contatto
        </Link>
        <div>
          <Link to={"/"} className="fw-semibold mt-2">
            5 collegamenti
          </Link>
        </div>
        <div className="d-grid gap-2 d-block d-md-none">
          <Button
            variant="primary"
            className="fw-bold mt-3 rounded-pill btn-disponibile-per ms-md-2"
          >
            Disponibile per
          </Button>
        </div>
        <Button
          variant="primary"
          className="fw-bold mt-3 rounded-pill btn-disponibile-per ms-md-2 d-none d-md-block"
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
          className="fw-semibold mt-3 rounded-circle rounded-md-pill ms-2  btn-alert"
        >
          <p className="d-none d-md-block m-0">Altro</p>{" "}
          <p className="d-block d-md-none m-0">
            <i className="bi bi-three-dots"></i>
          </p>
        </Button>
        <Container fluid>
          <Row className="justify-content-evenly">
            <Col
              xs={12}
              lg={5}
              className="DisponibileALavorare mt-4 p-3 rounded-3"
            >
              <h3 className="mb-0 fw-semibold">
                Disponibile a lavorare
              </h3>
              <h2 className="mb-0 fw-normal">
                Ruoli di {information.title}
              </h2>
              <Link to={"/"} className="fw-semibold">
                Mostra dettagli
              </Link>
            </Col>
            <Col
              xs={0}
              lg={5}
              className="DisponibileALavorare  d-none d-lg-inline-block mt-4 p-3 rounded-3 bg-white border "
            >
              <h2 className="mb-0 fw-normal">
                Fai sapere che stai facendo selezione e
                attrai candidati interessanti
              </h2>
              <Link to={"/"} className="fw-semibold">
                Inizia
              </Link>
            </Col>
          </Row>
        </Container>

        <ModalInformation
          show={show}
          handleClose={handleClose}
          setShow={setShow}
        />
      </div>
    </>
  );
};

export default ProfileInformation;
