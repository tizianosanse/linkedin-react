import { Card, ListGroup, Image } from "react-bootstrap";

const NotizieHome = () => {
  return (
    <>
      <Card className="cardNotizieHome">
        <div>
          <h6 className="fw-bold fs-5">Linkedin Notizie</h6>
          <p className="fw-semibold textColorLightGrey">Storie principali</p>
        </div>
        <ListGroup>
          <ListGroup.Item className="fw-bold text-dark">
            Banca Generali apre a Lugano
            <p className="textColorLightGrey">
              5 giorni fa •<span>7.027 lettori</span>
            </p>
          </ListGroup.Item>
          <ListGroup.Item className="fw-bold text-dark">
            Scalapay e Deutsche Bank uniscono..
            <p className="textColorLightGrey">
              3 giorni fa •<span>544 lettori</span>
            </p>
          </ListGroup.Item>
          <ListGroup.Item className="fw-bold text-dark">
            Più benefit per attrarre lavoratori
            <p className="textColorLightGrey">
              3 giorni fa •<span>650 lettori</span>
            </p>
          </ListGroup.Item>
          <ListGroup.Item className="fw-bold text-dark">
            Meno investimenti in venture capital
            <p className="textColorLightGrey">
              4 giorni fa •<span>190 lettori</span>
            </p>
          </ListGroup.Item>
          <ListGroup.Item className="fw-bold text-dark">
            Una conversazione sul doppiaggio
            <p className="textColorLightGrey">
              2 giorni fa •<span>182 lettori</span>
            </p>
          </ListGroup.Item>
        </ListGroup>
        <p>
          Vedi altro
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-down-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
            />
          </svg>
        </p>
        <p>
          I giochi di oggi <span>NOVITÀ</span>
        </p>
        <div className="d-flex">
          <Image src={"https://static.licdn.com/aero-v1/sc/h/25itbd3dpc6ockbgvdhot9qp1"} />
          <div>
            <p>Queens</p>
            <p>Incorona ogni regione</p>
          </div>
        </div>
      </Card>
    </>
  );
};
export default NotizieHome;
