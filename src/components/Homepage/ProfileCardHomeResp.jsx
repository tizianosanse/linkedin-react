import { Card, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProfileCardHomeResp = () => {
  const information = useSelector(
    (state) => state.ProfileInformation.informationNav
  );
  console.log(information);
  return (
    <>
      <Card className="d-block d-md-none">
        <Card.Img
          className="position-relative"
          variant="top"
          src="https://media.licdn.com/dms/image/D4D16AQGR7oL6PASXmQ/profile-displaybackgroundimage-shrink_350_1400/0/1714228562535?e=1721260800&v=beta&t=jtk5zm5ymxNk3idHW59aWKv6TxWQ5YSzsJ1gkTrlGNA"
        />
        <Card.Body>
          {information && (
            <>
              <Image
                src={information.image}
                width={60}
                height={60}
                className="imageUserNavbar position-absolute"
                style={{
                  border: "2px solid white",
                  top: "40%",
                  left: "45%",
                }}
              ></Image>
              <Card.Text>
                <div className="text-center ">
                  <h6 className="m-0 fw-bold">
                    {information.name}
                    {information.surname}
                  </h6>
                  <p
                    className="m-0 underlineGray pb-2 textColorLightGrey"
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                    }}
                  >
                    {information.title}
                  </p>
                </div>
              </Card.Text>
            </>
          )}
        </Card.Body>
      </Card>
      {/* <div className="d-block d-md-none w-100">
        <Card
          style={{ borderRadius: "10px" }}
          className="d-flex flex-column align-items-center w-100"
        >
          <div style={{ fontSize: "12px" }}>
            {information && (
              <>
                <div
                  style={{
                    backgroundImage: `url("https://media.licdn.com/dms/image/D4D16AQGR7oL6PASXmQ/profile-displaybackgroundimage-shrink_350_1400/0/1714228562535?e=1721260800&v=beta&t=jtk5zm5ymxNk3idHW59aWKv6TxWQ5YSzsJ1gkTrlGNA")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    position: "relative",
                    height: "60px",
                    marginBottom: "40px",
                  }}
                >
                  <Image
                    src={information.image}
                    width={60}
                    height={60}
                    className="imageUserNavbar "
                    style={{
                      position: "absolute",
                      top: "25px",
                      left: "33.3%",
                      border: "2px solid white",
                    }}
                  ></Image>
                </div>
                <div className="text-center ">
                  <h6 className="m-0 fw-bold">
                    {information.name}
                    {information.surname}
                  </h6>
                  <p
                    className="m-0 underlineGray pb-2 textColorLightGrey"
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                    }}
                  >
                    {information.title}
                  </p>
                </div>
              </>
            )}
          </div>
        </Card>
      </div> */}
    </>
  );
};
export default ProfileCardHomeResp;
