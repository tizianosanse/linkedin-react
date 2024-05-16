import { Col, Container, Row } from "react-bootstrap";
import Loading from "./Loading";

const NotFound = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <h1 className="display-1">404</h1>
            <h2>Pagina non trovata</h2>
            <Loading />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default NotFound;
