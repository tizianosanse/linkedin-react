import { useEffect, useState } from "react";
import { Card, ListGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { profilesAction } from "../redux/actions/Profiles";
import Profiles from "./Profiles";

const ProfiliCollegati = (props) => {
  const dispatch = useDispatch();
  const profiles = useSelector(
    (state) => state.Profiles.content
  );

  useEffect(() => {
    dispatch(profilesAction());
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className="my-3">
        <p className="m-0 fw-bold fs-7 m-3 mb-0">
          {props.title}
        </p>
        <p className="m-0 fw-light fs-8 mx-3 mb-3">
          {props.subtitle}
        </p>
        <ListGroup variant="flush border-top-0 mx-3">
          {profiles &&
            profiles
              .flat(1)
              .reverse()
              .slice(0, 5)
              .map((profile) => {
                return (
                  <Profiles
                    key={profile._id}
                    profile={profile}
                    sent={props.sent}
                    message={props.message}
                  />
                );
              })}
        </ListGroup>
        <p
          className="text-center my-3"
          onClick={handleShow}
        >
          Mostra tutto
        </p>
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Altri profili simili</Modal.Title>
          </Modal.Header>
          <Modal.Body
            className="p-0"
            style={{ overflow: "scroll", height: "600px" }}
          >
            <ListGroup>
              {profiles &&
                profiles
                  .flat(1)
                  .reverse()
                  .slice(0, 13)
                  .map((profile) => {
                    return (
                      <Profiles
                        key={profile._id}
                        profile={profile}
                        sent={props.sent}
                        message={props.message}
                      />
                    );
                  })}
            </ListGroup>
          </Modal.Body>
        </Modal>
      </Card>
    </>
  );
};
export default ProfiliCollegati;
