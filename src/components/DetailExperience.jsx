import { Col, Container, Row } from "react-bootstrap";
import Experience from "./Experience";
import LinguaProfilo from "./LinguaProfilo";
import Advertisements from "./Advertisements";
import ProfiliCollegati from "./ProfiliCollegati";
import sent from "../assets/icons8-sent-50.png";

const DetailExperience = () => {
  return (
    <>
      <Container className="my-3">
        <Row className="justify-content-between">
          <Col xs={12} md={6} lg={8}>
            <Experience showExperience={false} />
          </Col>
          <Col xs={0} md={6} lg={4} className="d-none d-md-block">
            <LinguaProfilo />
            <Advertisements class={"my-3"} />
            <ProfiliCollegati title={"Altri profili simili"} sent={sent} message={"Messaggio"} />

            <Advertisements class={"my-3 sticky-md-top sticky-md-advetisement sticky-lg-advetisement"} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default DetailExperience;
