import {
  Card,
  Dropdown,
  DropdownButton,
  Image,
} from "react-bootstrap";
import { useSelector } from "react-redux";

const Message = () => {
  const information = useSelector(
    (state) => state.ProfileInformation.content
  );
  return (
    <>
      <Card
        className="fixed-bottom"
        style={{ left: 1000, right: 100 }}
      >
        <DropdownButton
          id={`dropdown-button-drop-up`}
          drop="up"
          variant="white"
          title={
            <div className="d-flex align-items-center justify-content-between ">
              <div className="d-flex align-items-center">
                {" "}
                <Image
                  src={information.image}
                  width={25}
                  height={25}
                  className="rounded-circle mx-3"
                ></Image>{" "}
                <p className="m-0 fw-bold fs-8">
                  Messaggistica
                </p>{" "}
              </div>
              <div>
                {" "}
                <p className="m-0 fw-bold fs-8">
                  {" "}
                  <i className="bi bi-three-dots"></i>
                </p>
              </div>
            </div>
          }
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">
            Another action
          </Dropdown.Item>
          <Dropdown.Item eventKey="3">
            Something else here
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">
            Separated link
          </Dropdown.Item>
        </DropdownButton>
      </Card>
    </>
  );
};
export default Message;
