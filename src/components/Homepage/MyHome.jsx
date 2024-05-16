import { Col, Container, Row } from "react-bootstrap";
import ProfileInformation from "../ProfileInformation";
import Consigliati from "../Consigliati";
import Analisi from "../Analisi";
import Risorse from "../Risorse";
import Information from "../Information";
import Activity from "../Activity";
import Experience from "../Experience";
import Formazione from "../Formazione";
import Competenze from "../Competenze";
import Interessi from "../Interessi";
import LinguaProfilo from "../LinguaProfilo";
import Advertisements from "../Advertisements";
import ProfiliCollegati from "../ProfiliCollegati";
import sent from "../../assets/icons8-sent-50.png";
import addPeople from "../../assets/icons8-add-user-male-16.png";

const MyHome = () => {
  return (
    <>
      <Container className="my-3">
        <Row className="justify-content-between">
          <Col xs={12} md={6} lg={8}>
            <ProfileInformation />
            <Consigliati />
            <Analisi />
            <Risorse />
            <Information />
            <Activity />
            <Experience showExperience={true} />
            <Formazione />
            <Competenze />
            <Interessi />
          </Col>
          <Col
            xs={0}
            md={6}
            lg={4}
            className="d-none d-md-block"
          >
            <LinguaProfilo />
            <Advertisements class={"my-3"} />
            <ProfiliCollegati
              title={"Altri profili simili"}
              sent={sent}
              message={"Messaggio"}
            />
            <ProfiliCollegati
              title={"Persone che potresti conoscere"}
              sent={addPeople}
              message={"Collegati"}
              subtitle={"Dalla tua scuola o università"}
            />
            <Advertisements
              class={
                "my-3 sticky-md-top sticky-md-advetisement sticky-lg-advetisement"
              }
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MyHome;