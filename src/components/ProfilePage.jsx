import { Col, Container, Row } from "react-bootstrap";
import Consigliati from "./Consigliati";
import Analisi from "./Analisi";
import Risorse from "./Risorse";

const ProfilePage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={8}>
            <Consigliati />
            <Analisi />
            <Risorse />
          </Col>
          <Col xs={4}>ciaooo</Col>
        </Row>
      </Container>
    </>
  );
};
export default ProfilePage;
