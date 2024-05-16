import { Col, Container, Row } from "react-bootstrap";
import LeftSide from "./LeftSide";
import ExploreOpportunity from "./ExploreOpportunity";
import NetworkRecruitment from "./NetworkRecruitment";
import MoreJobOffers from "./MoreJobOffers";
import JobsPremium from "./JobsPremium";

const Jobs = () => {
  return (
    <>
      <Container className="my-3">
        <Row className="justify-content-between">
          <Col xs={3} md={3} lg={3}>
            <LeftSide />
          </Col>
          <Col xs={6} md={6} lg={6}>
            <ExploreOpportunity />
            <JobsPremium />
            <NetworkRecruitment />

            <MoreJobOffers />
          </Col>
          <Col xs={3} md={3} lg={3}></Col>
        </Row>
      </Container>
    </>
  );
};
export default Jobs;
