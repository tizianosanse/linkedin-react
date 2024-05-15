import { Button, Card, ListGroup } from "react-bootstrap";
import pencil from "../assets/icons8-pencil-48.png";
import { useSelector } from "react-redux";

const LinguaProfilo = () => {
  const information = useSelector(
    (state) => state.ProfileInformation.informationNav
  );
  return (
    <>
      <Card className="mt-2">
        <ListGroup variant="flush">
          <ListGroup.Item className="mx-1">
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
          <ListGroup.Item className="mx-1">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <p className="m-0 fw-bold fs-7">
                  Profilo pubblico e URL
                </p>
                {information && (
                  <p className="m-0 fw-light fs-8">
                    {information.name} {information.surname}{" "}
                    / {information._id}
                  </p>
                )}
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
