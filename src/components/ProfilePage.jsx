import { Col, Container, Row } from "react-bootstrap";
import LinguaProfilo from "./LinguaProfilo";

const ProfilePage = () => {
  return (
    <>
      <Container className="my-3">
        <Row>
          <Col xs={12} md={8}>
            ciaooo
          </Col>
          <Col xs={0} md={4} className="d-none d-md-block">
            <LinguaProfilo />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProfilePage;
