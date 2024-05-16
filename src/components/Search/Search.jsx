import { Col, Container, Row } from "react-bootstrap";
import SearchResult from "./SearchResult";

const Search = () => {
  return (
    <>
      <Container className="my-3">
        <Row className="justify-content-between">
          <Col xs={6} md={6} lg={6}>
            <SearchResult />
          </Col>
          <Col xs={6} md={6} lg={6}></Col>
        </Row>
      </Container>
    </>
  );
};
export default Search;
