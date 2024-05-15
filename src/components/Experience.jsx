import {
  Card,
  Col,
  Dropdown,
  DropdownToggle,
  Image,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import pencil from "../assets/icons8-pencil-48.png";
import { useEffect, useState } from "react";

import ModalForm from "./ModalForm";
import { useDispatch, useSelector } from "react-redux";
import { GetExperienceAction } from "../redux/actions/Experience";

const Experience = (props) => {
  const navigate = useNavigate();
  const [show1, setShow1] = useState(false);
  const handleShow = () => setShow1(true);
  const information = useSelector(
    (state) => state.ProfileInformation.content
  );

  const id = information._id;

  const handleClose1 = () => setShow1(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetExperienceAction(id, "GET"));
  }, [id]);
  const experience = useSelector(
    (state) => state.Experience.content
  );
  const getYearAndMonth = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", {
      month: "long",
    });
    return `${month} ${year}`;
  };
  return (
    <>
      <div>
        <Card className="p-4 mt-2 border rounded-bottom-0">
          <div className="d-flex   p-1 mt-2  ">
            <h3 className="me-auto fs-5">Esperienza</h3>
            <Dropdown className="dropdownCustomExperience">
              <DropdownToggle
                className="pencil1 rounded-circle d-flex align-items-center justify-content-center me-2 customDropdownBtn"
                style={{ width: "50px", height: "50px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Outline"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z" />
                </svg>
              </DropdownToggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  href="#"
                  className="dropdownItemExperience"
                  onClick={handleShow}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#545454"
                    className="bi bi-briefcase-fill mx-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
                  </svg>
                  Aggiungi posizione lavorativa
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="dropdownItemExperience"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#545454"
                    className="bi bi-calendar-date mx-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23" />
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                  </svg>
                  Aggiungi pausa lavorativa
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div
              className="pencil1 rounded-circle d-flex align-items-center justify-content-center "
              style={{ width: "50px", height: "50px" }}
              onClick={() => {
                navigate(`/DetailExperience`);
              }}
            >
              <Image src={pencil} width={30} height={30} />
            </div>
          </div>
          <>
            {experience &&
              experience.map((exp) => {
                return (
                  <Row xs={1} key={exp._id}>
                    <Col
                      xs={2}
                      className="pe-0"
                      style={{ maxWidth: "70px" }}
                    >
                      <Image
                        src={exp.image}
                        width={50}
                        height={50}
                      />
                    </Col>
                    <Col xs={8} className="ps-0">
                      <p
                        className="m-0"
                        style={{ fontWeight: "bold" }}
                      >
                        {exp.role}
                      </p>
                      <p className="m-0">{exp.company}</p>
                      <span
                        style={{
                          color: "Gray",
                          fontSize: "0.9em",
                        }}
                      >
                        {getYearAndMonth(exp.startDate)} -{" "}
                        {getYearAndMonth(exp.endDate)}
                      </span>
                      <span
                        className="d-block"
                        style={{
                          color: "Gray",
                          fontSize: "0.9em",
                        }}
                      >
                        {exp.area}
                      </span>
                    </Col>
                    {!props.showExperience && (
                      <Col
                        xs={2}
                        className="pe-0"
                        style={{ maxWidth: "70px" }}
                      >
                        <Link
                          className="btn"
                          to={`/form/${exp._id}`}
                        >
                          <Image
                            src={pencil}
                            width={30}
                            height={30}
                          />
                        </Link>
                      </Col>
                    )}
                  </Row>
                );
              })}
          </>
        </Card>
        {props.showExperience && (
          <div className=" border border-top-0 link rounded-bottom ">
            <Link
              className="text-decoration-none p-2 text-black "
              to="/DetailExperience"
            >
              Mostra tutte le esperienza (
              {experience.length})
              <span className="ms-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 -6.5 38 38"
                  version="1.1"
                >
                  <title>right-arrow</title>
                  <desc>Created with Sketch.</desc>
                  <g id="icons" stroke="none" fill="none">
                    <g
                      id="ui-gambling-website-lined-icnos-casinoshunter"
                      transform="translate(-1511.000000, -158.000000)"
                      fill="#1C1C1F"
                    >
                      <g
                        id="1"
                        transform="translate(1350.000000, 120.000000)"
                      >
                        <path
                          d="M187.812138,38.5802109 L198.325224,49.0042713 L198.41312,49.0858421 C198.764883,49.4346574 198.96954,49.8946897 199,50.4382227 L198.998248,50.6209428 C198.97273,51.0514917 198.80819,51.4628128 198.48394,51.8313977 L198.36126,51.9580208 L187.812138,62.4197891 C187.031988,63.1934036 185.770571,63.1934036 184.990421,62.4197891 C184.205605,61.6415481 184.205605,60.3762573 184.990358,59.5980789 L192.274264,52.3739093 L162.99947,52.3746291 C161.897068,52.3746291 161,51.4850764 161,50.3835318 C161,49.2819872 161.897068,48.3924345 162.999445,48.3924345 L192.039203,48.3917152 L184.990421,41.4019837 C184.205605,40.6237427 184.205605,39.3584519 184.990421,38.5802109 C185.770571,37.8065964 187.031988,37.8065964 187.812138,38.5802109 Z"
                          id="right-arrow"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </Link>
          </div>
        )}
      </div>
      <ModalForm
        show1={show1}
        handleClose1={handleClose1}
        putOrDeleteExperienc={false}
      />
    </>
  );
};
export default Experience;
