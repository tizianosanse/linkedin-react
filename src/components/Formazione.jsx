import { Card, Col, Image, Row } from "react-bootstrap";
import pencil from "../assets/icons8-pencil-48.png";
const Formazione = () => {
  return (
    <>
      <Card className="mt-2 p-4">
        <div className="d-flex  pencil1 rounded-circle p-1 mt-2  ">
          <h3 className="me-auto">Formazione</h3>
          <div className="pencil1 me-5">
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
          <Image src={pencil} width={30} height={30} />
        </div>
        <Row>
          <Col xs={3}>
            <Image
              src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/EPICODE_resized/original.png?1651791536"
              roundedCircle
              width={70}
              height={70}
            />
          </Col>
          <Col xs={9}>
            <h3>EPICODE</h3>
            <p>
              sviluppatore front end e back end, full stack
              developersviluppatore front end e back end, full stack developer
              feb 2024 - ago 2024feb 2024 - ago 2024 SASS, JavaScript e +3
              competenze
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Image
              src="https://iio.azcast.arizona.edu/sites/default/files/profile-blank-whitebg.png"
              roundedCircle
              width={70}
              height={70}
            />
          </Col>
          <Col xs={9}>
            <h3>ITIS FERMI</h3>
            <p>
              Diploma di Specializzazione di 1° livello DS1 in scienze e
              tecnologie informatiche, Tecnologia/tecnico di ingegneria dell
              automazione Diploma di Specializzazione di 1° livello DS1 in
              scienze e tecnologie informatiche, Tecnologia/tecnico di
              ingegneria dell automazione set 2014 - lug 2018set 2014 - lug 2018
              Lingua inglese e C++
            </p>
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default Formazione;
