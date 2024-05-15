import { Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Profiles = (props) => {
  return (
    <>
      <ListGroup.Item>
        <div className="d-flex">
          <div>
            <img
              src={props.profile.image}
              alt="image-profile"
              className="img-fluid rounded-circle img-profiles mx-3"
            />
          </div>
          <div className="d-flex flex-column">
            <Link
              to={`/profilePage/${props.profile._id}`}
              className="undeline text-black"
            >
              {props.profile.name} {props.profile.surname}
            </Link>

            <p className="m-0 fw-light fs-8 d-inline-block">
              {props.profile.title}
            </p>
            <Button
              variant="outline-dark"
              className=" rounded-pill my-3 d-flex align-items-center justify-content-evenly"
              style={{ width: "150px" }}
            >
              <img
                src={props.sent}
                alt=""
                className="pencil"
              />
              <p className="m-0 fw-light fs-8 d-inline-block">
                {" "}
                {props.message}
              </p>
            </Button>
          </div>
        </div>
      </ListGroup.Item>
    </>
  );
};
export default Profiles;
