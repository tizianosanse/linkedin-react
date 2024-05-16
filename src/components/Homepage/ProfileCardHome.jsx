import { Card, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileCardHome = () => {
  const information = useSelector((state) => state.ProfileInformation.informationNav);
  console.log(information);
  return (
    <>
      <Card style={{ borderRadius: "10px" }}>
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
                  className="imageUserNavbar"
                  style={{ position: "absolute", top: "25px", left: "65px", border: "2px solid white" }}
                ></Image>
              </div>
              <div className="text-center ">
                <h6 className="m-0 fw-bold">
                  {information.name}
                  {information.surname}
                </h6>
                <p
                  className="m-0 underlineGray pb-2 textColorLightGrey"
                  style={{ fontSize: "12px", fontWeight: "400" }}
                >
                  {information.title}
                </p>
              </div>
            </>
          )}

          <div>
            <div className="divVisitatoriImpressioni p-2 pb-1">
              <p className="m-0 textColorLightGrey fw-bold" style={{ fontSize: "12px" }}>
                Visitatori del profilo
              </p>
              <p className="textBlueLight m-0">221</p>
            </div>
            <div className="divVisitatoriImpressioni underlineGray p-2 pt-1">
              <p className="m-0 textColorLightGrey fw-bold" style={{ fontSize: "12px" }}>
                Impressioni del post{" "}
              </p>
              <p className="textBlueLight m-0">721</p>
            </div>
          </div>
          <div className="p-2 underlineGray">
            <p className="textColorLightGrey m-0">Fai crescere il tuo buisness con Premium</p>
            <p className="m-0 fw-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="#bf9927"
                className="bi bi-gem mx-2"
                viewBox="0 0 16 16"
              >
                <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"></path>
              </svg>
              Prova per 0 EUR
            </p>
          </div>
          <div className="p-2">
            <p className="m-0 fw-bold">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="#4e4e4e"
                className="bi bi-bookmark-fill mx-2"
                viewBox="0 0 16 16"
              >
                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
              </svg>
              Elementi salvati
            </p>
          </div>
        </div>
      </Card>
      <Card className="mt-2" style={{ borderRadius: "10px" }}>
        <div className="p-2 underlineGray" style={{ fontSize: "12px", position: "relative" }}>
          <Link className="d-block textBlueLight mb-2">Gruppi</Link>
          <Link className="d-block textBlueLight mb-2">Eventi</Link>
          <Link className="d-block textBlueLight mb-1">Salvati</Link>
          <p style={{ position: "absolute", top: "32px", right: "10px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2e2e2e"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
          </p>
        </div>
        <div className="text-center">
          <p className="m-0 p-2 fw-bold" style={{ fontSize: "14px" }}>
            Scopri di più
          </p>
        </div>
      </Card>
    </>
  );
};
export default ProfileCardHome;
