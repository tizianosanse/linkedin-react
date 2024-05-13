import { ListGroup } from "react-bootstrap";

const Profiles = ({ profile }) => {
  return (
    <>
      <ListGroup.Item>
        <div>
          <div>
            <img src={profile.image} alt="image-profile" />
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
