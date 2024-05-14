import { Card, Col, Image, Row } from "react-bootstrap";
import pencil from "../assets/icons8-pencil-48.png";
import { Link } from "react-router-dom";

const Competenze = () => {
  return (
    <>
      {" "}
      <Card className="p-4 mt-2 border rounded-bottom-0">
        <div className="d-flex   p-1 mt-2  ">
          <h3 className="me-auto fs-5">Competenze</h3>
          <div
            className="pencil1 rounded-circle d-flex align-items-center justify-content-center me-2 "
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
          </div>
          <div
            className="pencil1 rounded-circle d-flex align-items-center justify-content-center "
            style={{ width: "50px", height: "50px" }}
          >
            <Image src={pencil} width={30} height={30} />
          </div>
        </div>

        <h3 style={{ fontSize: "16px" }}>REDUX</h3>
        <Row xs={1} style={{ borderBottom: "solid 1px #8f8f8f2c" }}>
          <Col xs={1} className="pe-0">
            <Image
              src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/EPICODE_resized/original.png?1651791536"
              roundedCircle
              width={16}
              height={16}
            />
          </Col>
          <Col xs={11} className="ps-0">
            <p>EPICODE</p>
          </Col>
        </Row>
        <h3 style={{ fontSize: "16px" }} className="mt-3">
          REACT
        </h3>
        <Row>
          <Col xs={1} className="pe-0 ">
            <Image
              src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/EPICODE_resized/original.png?1651791536"
              roundedCircle
              width={16}
              height={16}
            />
          </Col>
          <Col xs={11} className="ps-0">
            <p>EPICODE</p>
          </Col>
        </Row>
      </Card>{" "}
      <div className=" border border-top-0 link rounded-bottom ">
        <Link className="text-decoration-none p-2 text-black " to="/">
          Mostra tutte le competenze(9)
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
                  <g id="1" transform="translate(1350.000000, 120.000000)">
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
    </>
  );
};
export default Competenze;
