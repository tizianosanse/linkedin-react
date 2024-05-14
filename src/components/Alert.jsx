import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function AlertConsigliati() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div>
        <Alert
          className="AlertConsigliati"
          variant="light"
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>Dove lavori attualmente?</Alert.Heading>
          <p>
            Gli utenti che includono almeno una posizione lavorativa ricevono
            fino a 3,5 volte più visualizzazioni del profilo.
          </p>
          <Button variant="outline-dark" className="rounded-pill btn-alert">
            Aggiungi posizione
          </Button>
        </Alert>
      </div>
    );
  }
  return;
}

export default AlertConsigliati;
