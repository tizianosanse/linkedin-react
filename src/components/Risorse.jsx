import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Risorse = () => {
  return (
    <>
      <Card className="p-4 mt-2">
        <h3 className="fs-5">Risorse</h3>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="gray"
            className="mercado-match"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
          </svg>
          <span className="mx-2 textP">Solo per te</span>
        </span>

        <Row className="mt-2">
          <Col xs={1} className="pe-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
            </svg>
          </Col>
          <Col xs={11} className="ps-0">
            <p style={{ fontWeight: "600" }} className="mb-0 textP">
              La mia Rete
            </p>
            <p className="textP">
              Salva e gestisci i tuoi collegamenti e interessi.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={1} className="pe-0">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
              </svg>
            </div>
          </Col>
          <Col xs={11} className="ps-0">
            <p style={{ fontWeight: "600" }} className="textP mb-0">
              Elementi Salvati
            </p>
            <p className="textP">
              Monitora le tue offerte di lavoro, i corsi e gli articoli.
            </p>
          </Col>
        </Row>
      </Card>
      <div className=" border border-top-0 link rounded-bottom ">
        <Link className="text-decoration-none p-2 text-black" to="/">
          Mostra tutte le risorse
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
export default Risorse;
