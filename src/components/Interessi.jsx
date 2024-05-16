import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Image,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

// import PaginationBasic from "./PaginationInteressi";

const Interessi = () => {
  const [selectedInt1, setSelectedInt1] = useState(true);
  const [selectedInt2, setSelectedInt2] = useState(false);
  return (
    <>
      <Card className="mt-2 p-5">
        <h3 className="fs-5">Interessi</h3>
        <Row>
          <Col
            xs={6}
            md={5}
            lg={3}
            className="pe-0 me-6 "
            onClick={() => {
              setSelectedInt1(true);
              setSelectedInt2(false);
            }}
          >
            {selectedInt1 ? (
              <div className="textP hover divIntHover align-content-center ">
                <p className="m-0">Top Voices</p>
              </div>
            ) : (
              <div className="textP hover2 divIntHover align-content-center ">
                <p className="m-0">Top Voices</p>
              </div>
            )}
          </Col>

          <Col
            xs={6}
            md={7}
            lg={9}
            className="ps-0 ms-6 "
            onClick={() => {
              setSelectedInt1(false);
              setSelectedInt2(true);
            }}
          >
            {selectedInt2 ? (
              <div className="textP hover divIntHover2 align-content-center">
                <p className="m-0">Scuole e universita</p>
              </div>
            ) : (
              <div>
                <p className="textP hover2 divIntHover2 align-content-center m-0 ">
                  Scuole e universita
                </p>
              </div>
            )}
          </Col>
        </Row>
        {selectedInt1 && (
          <Row>
            <Col>
              <Row className="mt-4">
                <Col xs={3} className="m-0 p-0">
                  <Image
                    src="https://startup.info/wp-content/uploads/2020/10/Nicolo-Santin-scaled.jpg"
                    roundedCircle
                    width={60}
                    height={60}
                  />
                </Col>
                <Col
                  xs={9}
                  className="m-0 p-0"
                  style={{ width: "200px" }}
                >
                  <p
                    className="textP m-0 p-0 "
                    style={{ fontWeight: "600" }}
                  >
                    Nicolò Santin
                  </p>
                  <p className="my-0 textP">
                    CEO & Co-founder Gamindo | Linkedin Top
                    Voices (92k+ followers) | Tedx Speaker
                  </p>
                  <p className="textTrasp p-0 mt-0 textP">
                    92.235 follower
                  </p>
                  <Button
                    variant="outline-dark"
                    className="rounded-pill btn-alert"
                    style={{
                      width: "130px",
                      height: "40px",
                    }}
                  >
                    <div className="d-flex align-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                      </svg>
                      <p> Già segui </p>
                    </div>
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="mt-4">
                <Col xs={3} className="m-0 p-0">
                  <Image
                    src="https://www.imec-int.com/sites/default/files/2022-04/Bill%20Gates%20Headshot.png"
                    roundedCircle
                    width={60}
                    height={60}
                  />
                </Col>
                <Col
                  xs={9}
                  className="m-0 p-0"
                  style={{ width: "200px" }}
                >
                  <p
                    className="textP mb-0 "
                    style={{ fontWeight: "600" }}
                  >
                    Bill Gates
                  </p>
                  <p className="m-0 p-0 textP">
                    Co-chair, Bill & Melinda Gates
                    FoundationCo-chair, Bill & Melinda Gates
                    Foundation
                  </p>
                  <p className="textTrasp p-0 mt-0 textP">
                    35.286.373 follower
                  </p>
                  <Button
                    variant="outline-dark"
                    className="rounded-pill btn-alert"
                    style={{
                      width: "130px",
                      height: "40px",
                    }}
                  >
                    <div className="d-flex align-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                      </svg>
                      <p>Già segui</p>
                    </div>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
        {selectedInt2 && (
          <Row>
            <Col>
              <Row className="mt-4">
                <Col xs={2} className="m-0 p-0">
                  <Image
                    src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/EPICODE_resized/original.png?1651791536"
                    roundedCircle
                    width={50}
                    height={50}
                  />
                </Col>
                <Col
                  xs={10}
                  className="m-0 p-0"
                  style={{ width: "200px" }}
                >
                  <p
                    className="textP mb-0 "
                    style={{ fontWeight: "600" }}
                  >
                    EPICODE
                  </p>
                  <p className="mt-0 textP textTrasp">
                    EPICODE 15.027 follower15.027 follower
                  </p>
                  <Button
                    variant="outline-dark"
                    className="rounded-pill btn-alert"
                    style={{
                      width: "130px",
                      height: "40px",
                    }}
                  >
                    <div className="d-flex align-content-center">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                      </svg>
                      <p>Già segui</p>
                    </div>
                  </Button>
                </Col>
              </Row>
            </Col>{" "}
            <Col>
              <Row className="mt-4">
                <Col
                  xs={10}
                  className="m-0 p-0"
                  style={{ width: "200px" }}
                >
                  <p
                    className="textP mb-0 "
                    style={{ fontWeight: "600" }}
                  >
                    EPICODE GlobalEPICODE Global
                  </p>
                  <p className="mt-0 textP textTrasp">
                    4.607 follower4.607 follower
                  </p>
                  <Button
                    variant="outline-dark"
                    className="rounded-pill btn-alert"
                    style={{
                      width: "130px",
                      height: "40px",
                    }}
                  >
                    <div className="d-flex align-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                      </svg>
                      <p>Già segui</p>
                    </div>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      </Card>
      {selectedInt1 && (
        <div className=" border border-top-0 link rounded-bottom ">
          <Link
            className="text-decoration-none p-2 text-black"
            to="/"
          >
            Mostra tutte le Top Voices
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
    </>
  );
};
export default Interessi;
