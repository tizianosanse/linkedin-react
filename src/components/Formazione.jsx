import { Card, Col, Image, Row } from "react-bootstrap";
import pencil from "../assets/icons8-pencil-48.png";
const Formazione = () => {
  return (
    <>
      <Card className="mt-2 p-4">
        <div className="d-flex   p-1 mt-2  ">
          <h3 className="me-auto fs-5">Formazione</h3>
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
          <Col xs={2} className="px-0 mx-0">
            <Image
              src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/EPICODE_resized/original.png?1651791536"
              roundedCircle
              width={30}
              height={30}
            />
          </Col>
          <Col xs={10} className="px-0 mx-0">
            <h4 className="fs-7">EPICODE</h4>
            <p className="mb-0 textP">
              sviluppatore front end e back end, full stack
              developersviluppatore front end e back end,
              full stack developer feb 2024 - ago 2024feb
              2024 - ago 2024{" "}
            </p>
            <div className="d-flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
              >
                <path d="M2.009,7.956C2.008,7.971,2,7.984,2,8l0,.013c.009.721.677,1.107,9.175,13.556a1,1,0,0,0,1.644,0C22.167,7.967,21.99,8.563,22,8.013L22,8c0-.016-.008-.029-.009-.044-.025-.563-.474-.906-3.134-5.471A1,1,0,0,0,18,2H6a1,1,0,0,0-.857.485C2.363,7.256,2.032,7.423,2.009,7.956ZM12,19.243,4.908,9H19.092ZM6.566,4H17.434l1.8,3H4.766Z" />
              </svg>

              <p
                style={{ fontWeight: "bold" }}
                className="textP m-0 p-0 ms-1"
              >
                SASS, JavaScript e +3 competenze
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 px-0">
          <Col xs={2} className="px-0 mx-0">
            <Image
              src="https://iio.azcast.arizona.edu/sites/default/files/profile-blank-whitebg.png"
              roundedCircle
              width={30}
              height={30}
            />
          </Col>
          <Col xs={10} className="px-0 mx-0">
            <h4 className="fs-7">ITIS FERMI</h4>
            <p className="textP mb-0">
              Diploma di Specializzazione di 1° livello DS1
              in scienze e tecnologie informatiche,
              Tecnologia/tecnico di ingegneria dell
              automazione Diploma di Specializzazione di 1°
              livello DS1 in scienze e tecnologie
              informatiche, Tecnologia/tecnico di ingegneria
              dell automazione set 2014 - lug 2018set 2014 -
              lug 2018
            </p>
            <div className="d-flex ">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
              >
                <path d="M2.009,7.956C2.008,7.971,2,7.984,2,8l0,.013c.009.721.677,1.107,9.175,13.556a1,1,0,0,0,1.644,0C22.167,7.967,21.99,8.563,22,8.013L22,8c0-.016-.008-.029-.009-.044-.025-.563-.474-.906-3.134-5.471A1,1,0,0,0,18,2H6a1,1,0,0,0-.857.485C2.363,7.256,2.032,7.423,2.009,7.956ZM12,19.243,4.908,9H19.092ZM6.566,4H17.434l1.8,3H4.766Z" />
              </svg>{" "}
              <p
                style={{ fontWeight: "bold" }}
                className="textP ms-1"
              >
                Lingua inglese e C++
              </p>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default Formazione;
