import { Col, Container, Row } from "react-bootstrap";

import ProfileCardHome from "./ProfileCardHome";
import NewPostHome from "./NewPostHome";
import PostHome from "./PostHome";
const MyHome = () => {
  return (
    <>
      <Container className="my-3">
        <Row className="justify-content-between">
          <Col xs={2} md={2} lg={2}>
            <ProfileCardHome />
          </Col>
          <Col xs={7} md={7} lg={7}>
            <NewPostHome />
            <PostHome />
          </Col>
          <Col xs={3} md={3} lg={3}></Col>
        </Row>
      </Container>
    </>
  );
};
export default MyHome;
