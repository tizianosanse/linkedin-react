import { Button, ListGroup } from "react-bootstrap";

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
            <p>{profile.title}</p>
            <Button variant="ouline-black"></Button>
          </div>
        </div>
      </ListGroup.Item>
    </>
  );
};
export default Profiles;
