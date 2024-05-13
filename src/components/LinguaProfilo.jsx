import { Button, Card, ListGroup } from "react-bootstrap";
import pencil from "../assets/icons8-pencil-48.png";

const LinguaProfilo = () => {
  return (
    <>
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <p className="m-0 fw-bold fs-7">
                  Lingua del profilo
                </p>
                <p className="m-0 fw-light fs-8">
                  Italiano
                </p>
              </div>
              <Button
                variant="btn"
                className="text-black"
                size="sm"
              >
                <img
                  src={pencil}
                  alt="pencil"
                  className="img-fluid pencil"
                />
              </Button>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <p className="m-0 fw-bold fs-7">
                  Profilo pubblico e URL
                </p>
                <p className="m-0 fw-light fs-8">
                  Qui va il link della fetch!!
                </p>
              </div>
              <Button
                variant="btn"
                className="text-black"
                size="sm"
              >
                <img
                  src={pencil}
                  alt="pencil"
                  className="img-fluid pencil"
                />
              </Button>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};
export default LinguaProfilo;
