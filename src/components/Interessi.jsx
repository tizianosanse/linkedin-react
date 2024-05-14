import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

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
            onClick={() => {
              setSelectedInt1(true);
              setSelectedInt2(false);
            }}
          >
            Aziende
          </Col>

          <Col
            onClick={() => {
              setSelectedInt1(false);
              setSelectedInt2(true);
            }}
          >
            Scuole e universita
          </Col>
        </Row>
        {selectedInt1 && <div>Azienda</div>}
        {selectedInt2 && <div>scuola</div>}
      </Card>
    </>
  );
};
export default Interessi;
