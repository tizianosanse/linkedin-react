import { useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { profilesAction } from "../redux/actions/profiliCollegati";
import Profiles from "./Profiles";

const ProfiliCollegati = () => {
  const dispatch = useDispatch();
  const profiles = useSelector(
    (state) => state.Profiles.content
  );
  console.log(profiles);
  useEffect(() => {
    dispatch(profilesAction());
  }, []);
  return (
    <>
      <Card className="my-3">
        <p className="m-0 fw-bold fs-7 m-3">
          Altri profili simili
        </p>
        <ListGroup variant="flush border-top-0 mx-3">
          {profiles &&
            profiles.slice(0, 5).map((profile) => {
              return (
                <Profiles
                  key={profile._id}
                  profile={profile}
                />
              );
            })}
        </ListGroup>
      </Card>
    </>
  );
};
export default ProfiliCollegati;
