import { Col, Container, Row } from "react-bootstrap";

const Search = () => {
  return (
    <>
      <Container className="my-3">
        <Row className="justify-content-between">
          <Col xs={3} md={3} lg={3}></Col>
          <Col xs={6} md={6} lg={6}></Col>
          <Col xs={3} md={3} lg={3}></Col>
        </Row>
      </Container>
    </>
  );
};
export default Search;
