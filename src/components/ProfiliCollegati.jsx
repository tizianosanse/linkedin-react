import { Card, ListGroup } from "react-bootstrap";

const ProfiliCollegati = () => {
  return (
    <>
      <Card className="my-3">
        <p className="m-0 fw-bold fs-7 m-3">
          Altri profili simili
        </p>
        <ListGroup variant="flush border-top-0 mx-3">
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
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};
export default ProfiliCollegati;
