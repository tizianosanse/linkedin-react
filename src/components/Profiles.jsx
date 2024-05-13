import { Button, ListGroup } from "react-bootstrap";
import sent from "../assets/icons8-sent-50.png";

const Profiles = ({ profile }) => {
  return (
    <>
      <ListGroup.Item>
        <div className="d-flex">
          <div>
            <img
              src={profile.image}
              alt="image-profile"
              className="img-fluid rounded-circle img-profiles mx-3"
            />
          </div>
          <div className="d-flex flex-column">
            <p className="m-0">
              {profile.name} {profile.surname}
            </p>
            <p className="m-0 fw-light fs-8 d-inline-block">
              {profile.title}
            </p>
            <Button
              variant="outline-dark"
              className=" rounded-pill my-3"
              style={{ width: "150px" }}
            >
              <img src={sent} alt="" className="pencil " />
              <p className="m-0 fw-light fs-8 d-inline-block">
                {" "}
                Messaggio
              </p>
            </Button>
          </div>
        </div>
      </ListGroup.Item>
    </>
  );
};
export default Profiles;
