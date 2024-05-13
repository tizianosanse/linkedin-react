import { Card } from "react-bootstrap";
import Barra from "./BarraRiempimento";

const Consigliati = () => {
  return (
    <>
      <Card className="p-2 mt-2">
        <h3>Consigliati per te</h3>
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
          <span className="mx-2">Solo per te</span>
        </span>
        <h5>intermedio</h5> <Barra />
        <p className="mt-2">
          Completa 1 passaggio per raggiungere il livello Massimo
        </p>
      </Card>
    </>
  );
};
export default Consigliati;
