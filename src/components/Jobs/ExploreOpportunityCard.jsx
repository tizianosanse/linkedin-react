import { Col, Image, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setID } from "../../redux/actions/Search";

const ExploreOpportunityCard = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log(props);
    dispatch(setID(props.id));
  };
  return (
    <>
      <Row className={"exploreOpportunityCard border-bottom mt-4 "} onClick={handleClick}>
        <Col xs={1}>
          <Image
            src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={56}
            height={56}
          />
        </Col>
        <Col xs={9} className="ms-3">
          <Link to={props.url} className="text-decoration-none fw-bold ">
            {props.role}
          </Link>
          <h2 className="fw-normal mb-1">{props.company}</h2>
          <h3 className="lead mb-2">{props.location}</h3>
          <p className="d-inline-block me-2 mb-0 ">Promosso</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="#1666c2"
            width="20"
            height="20"
            focusable="false"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
          <p className="d-inline-block ms-1 mb-3">Candidatura Semplice</p>
        </Col>
      </Row>
    </>
  );
};

export default ExploreOpportunityCard;
