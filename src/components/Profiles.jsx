import { ListGroup } from "react-bootstrap";

const Profiles = ({ profile }) => {
  return (
    <>
      <ListGroup.Item>
        <div className="d-flex">
          <div>
            <img
              src={profile.image}
              alt="image-profile"
              className="img-fluid w-25 rounded-circle"
            />
          </div>
          <div>
            <p>
              {profile.name} {profile.surname}
            </p>
            <p>{profile.title}</p>
          </div>
        </div>
      </ListGroup.Item>
    </>
  );
};
export default Profiles;
