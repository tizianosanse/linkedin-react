import { Col, Container, Row } from "react-bootstrap";
import Consigliati from "./Consigliati";
import Analisi from "./Analisi";
import Risorse from "./Risorse";
import LinguaProfilo from "./LinguaProfilo";
import ProfiliCollegati from "./ProfiliCollegati";
import ProfileInformation from "./ProfileInformation";
import Information from "./Information";
import Activity from "./Activity";
import Formazione from "./Formazione";
import sent from "../assets/icons8-sent-50.png";
const ProfilePage = () => {
  return (
    <>
      <Container className="my-3">
        <Row className="justify-content-between">
          <Col xs={12} md={6} lg={8}>
            <ProfileInformation />
            <Consigliati />
            <Analisi />
            <Risorse />
            <Information />
            <Activity />
            <Formazione />
          </Col>
          <Col
            xs={0}
            md={6}
            lg={4}
            className="d-none d-md-block"
          >
            <LinguaProfilo />
            <ProfiliCollegati
              title={"Altri profili simili"}
              sent={sent}
              message={"Messaggio"}
            />
            <ProfiliCollegati
              title={"Persone che potresti conoscere"}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProfilePage;
