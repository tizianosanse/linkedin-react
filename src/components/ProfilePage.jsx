import { Col, Container, Row } from "react-bootstrap";
import Consigliati from "./Consigliati";
import Analisi from "./Analisi";
import Risorse from "./Risorse";
import LinguaProfilo from "./LinguaProfilo";
import ProfiliCollegati from "./ProfiliCollegati";
import ProfileInformation from "./ProfileInformation";

const ProfilePage = () => {
  return (
    <>
      <Container className="my-3">
        <Row>
          <Col xs={12} md={8}>
            <ProfileInformation />
            <Consigliati />
            <Analisi />
            <Risorse />
          </Col>
          <Col xs={0} md={4} className="d-none d-md-block">
            <LinguaProfilo />
            <ProfiliCollegati />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProfilePage;
