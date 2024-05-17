import { Col, Container, Row } from "react-bootstrap";
import SearchResult from "./SearchResult";
import JobDetails from "./JobDetails";

const Search = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-between">
          <Col xs={6} md={6} lg={6} className="g-0">
            <SearchResult />
          </Col>
          <Col xs={6} md={6} lg={6} className="g-0">
            <JobDetails />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Search;
