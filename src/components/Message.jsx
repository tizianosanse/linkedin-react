import { useState } from "react";
import {
  Button,
  Card,
  Collapse,
  Form,
  InputGroup,
  ListGroup,
} from "react-bootstrap";
import { useSelector } from "react-redux";

const Message = () => {
  const information = useSelector(
    (state) => state.ProfileInformation.content
  );
  const profiles = useSelector(
    (state) => state.Profiles.content
  );
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="fixed d-flex align-items-center justify-centent-between"
        variant="light"
      >
        <div className="d-flex align-items-center">
          <img
            src={information.image}
            alt=""
            className="img-profiles rounded-circle mx-3"
          />{" "}
          <p className="fw-bold fs-7 m-0">Massaggistica</p>
        </div>
        <div className="d-flex align-items-center">
          <p className="fw-bold fs-5 mx-2 mb-0">
            <i className="bi bi-three-dots"></i>
          </p>
          <p className="fw-bold fs-5 mx-2 mb-0">
            <i className="bi bi-pencil-square"></i>
          </p>
          <p className="fw-bold fs-5 mx-2 mb-0">
            <i className="bi bi-caret-up"></i>
          </p>
        </div>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <Card
            body
            style={{ width: "400px" }}
            className="fixed"
          >
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              className="d-flex align-items-center justify-centent-between"
              variant="white"
            >
              <div className="d-flex align-items-center">
                <img
                  src={information.image}
                  alt=""
                  className="img-profiles rounded-circle mx-3"
                />{" "}
                <p className="fw-bold fs-7 m-0">
                  Messaggistica
                </p>
              </div>
              <div className="d-flex align-items-center">
                <p className="fw-bold fs-5 mx-2 mb-0">
                  <i className="bi bi-three-dots"></i>
                </p>
                <p className="fw-bold fs-5 mx-2 mb-0">
                  <i className="bi bi-pencil-square"></i>
                </p>
                <p className="fw-bold fs-5 mx-2 mb-0">
                  <i className="bi bi-caret-down"></i>
                </p>
              </div>
            </Button>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#212529"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </InputGroup.Text>
              <Form.Control
                placeholder="Cerca messaggi"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <ListGroup>
              {profiles &&
                profiles.slice(15, 20).map((profile) => {
                  return (
                    <ListGroup.Item key={profile._id}>
                      <img
                        src={profile.image}
                        alt="img- profile"
                        className="rounded-circle img-profiles "
                      />{" "}
                      {profile.name} {profile.surname}
                    </ListGroup.Item>
                  );
                })}
            </ListGroup>
          </Card>
        </div>
      </Collapse>
    </>
  );
};
export default Message;
