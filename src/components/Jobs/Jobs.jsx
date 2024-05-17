import { Col, Container, Row } from "react-bootstrap";
import LeftSide from "./LeftSide";
import ExploreOpportunity from "./ExploreOpportunity";
import NetworkRecruitment from "./NetworkRecruitment";
import MoreJobOffers from "./MoreJobOffers";
import JobsPremium from "./JobsPremium";
import FooterHome from "../Homepage/FooterHome";

const Jobs = () => {
  return (
    <>
      <Container className="my-3">
        <Row className="justify-content-between">
          <Col xs={4} lg={3}>
            <div className="d-none d-md-block">
              <LeftSide />
            </div>
          </Col>
          <Col xs={12} md={8} lg={6} xl={6}>
            <ExploreOpportunity />
            <JobsPremium />
            <NetworkRecruitment />

            <MoreJobOffers />
          </Col>
          <Col xs={3} lg={3} xl={3}>
            <div className="mt-0 d-none d-lg-block">
              <FooterHome />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Jobs;
