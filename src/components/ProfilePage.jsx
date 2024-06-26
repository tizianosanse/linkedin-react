import { Col, Container, Row } from "react-bootstrap";
import Consigliati from "./Consigliati";
import Analisi from "./Analisi";
import Risorse from "./Risorse";
import LinguaProfilo from "./LinguaProfilo";
import ProfiliCollegati from "./ProfiliCollegati";
import ProfileInformation from "./ProfileInformation";
import Information from "./Information";
import Activity from "./Activity";
import Formazione from "./Formazione";
import sent from "../assets/icons8-sent-50.png";
import addPeople from "../assets/icons8-add-user-male-16.png";
import Advertisements from "./Advertisements";
import Competenze from "./Competenze";
import Interessi from "./Interessi";
import Experience from "./Experience";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import MyError from "./Homepage/MyError";
const ProfilePage = () => {
  const { idProfile } = useParams();
  const isLoading = useSelector(
    (state) => state.LoadingReduce.content
  );
  const hasError = useSelector(
    (state) => state.ErrorReduce.content
  );
  return (
    <>
      <Container className="my-3">
        <Row className="justify-content-between">
          <Col xs={12} md={8}>
            <ProfileInformation idProfile={idProfile} />
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
          <Col xs={0} md={4} className="d-none d-md-block">
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
        {isLoading && <Loading />}
        {hasError && <MyError />}
      </Container>
    </>
  );
};
export default ProfilePage;
