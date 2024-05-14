import { Card, Col, Image, Row } from "react-bootstrap";
import pencil from "../assets/icons8-pencil-48.png";
const Competenze = () => {
  return (
    <Card className="mt-2 p-4">
      <div className="d-flex   p-1 mt-2  ">
        <h3 className="me-auto fs-5">Competenze</h3>
        <div
          className="pencil1 rounded-circle d-flex align-items-center justify-content-center me-2 "
          style={{ width: "50px", height: "50px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z" />
          </svg>
        </div>
        <div
          className="pencil1 rounded-circle d-flex align-items-center justify-content-center "
          style={{ width: "50px", height: "50px" }}
        >
          <Image src={pencil} width={30} height={30} />
        </div>
      </div>
      <Row>
        <h3 style={{ fontSize: "16px" }}>SASS</h3>
        <Row xs={1}>
          <Col>
            <Image
              src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/EPICODE_resized/original.png?1651791536"
              roundedCircle
              width={16}
              height={16}
            />
          </Col>
          <h4 className="fs-7">EPICODE</h4>
        </Row>
        <Col xs={11}>
          <p className="mb-0 textP">
            sviluppatore front end e back end, full stack developersviluppatore
            front end e back end, full stack developer feb 2024 - ago 2024feb
            2024 - ago 2024
          </p>
          <p style={{ fontWeight: "bold" }} className="textP">
            SASS, JavaScript e +3 competenze
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={1}>
          <Image
            src="https://iio.azcast.arizona.edu/sites/default/files/profile-blank-whitebg.png"
            roundedCircle
            width={50}
            height={50}
          />
        </Col>
        <Col xs={11}>
          <h4 className="fs-7">ITIS FERMI</h4>
          <p className="textP mb-0">
            Diploma di Specializzazione di 1° livello DS1 in scienze e
            tecnologie informatiche, Tecnologia/tecnico di ingegneria dell
            automazione Diploma di Specializzazione di 1° livello DS1 in scienze
            e tecnologie informatiche, Tecnologia/tecnico di ingegneria dell
            automazione set 2014 - lug 2018set 2014 - lug 2018
          </p>
          <p style={{ fontWeight: "bold" }} className="textP">
            Lingua inglese e C++
          </p>
        </Col>
      </Row>
    </Card>
  );
};
export default Competenze;
