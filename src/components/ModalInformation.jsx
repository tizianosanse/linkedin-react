import { useState } from "react";
import {
  Button,
  Collapse,
  ListGroup,
  Modal,
} from "react-bootstrap";
import ModalForm from "./ModalForm";

const ModalInformation = (props) => {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        animation={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">
            Aggiungi al profilo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-grid gap-2">
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              size="lg"
              variant="light"
              className="bg-white border-0 d-flex align-items-center justify-content-between"
            >
              <p className="mb-0 fw-bold">
                Sezioni principali
              </p>
              <p className="mb-0 fw-bold">
                {open ? (
                  <i className="bi bi-caret-up"></i>
                ) : (
                  <i className="bi bi-caret-down"></i>
                )}{" "}
              </p>
            </Button>
          </div>

          <Collapse in={open}>
            <div id="example-collapse-text">
              <ListGroup>
                <ListGroup.Item>
                  <p className="fs-8 text-secondary mb-0 ">
                    Iniziamo dalle basi. Se compili queste
                    sezioni, sarà più facile trovarti per i
                    recluter e per le persone che potresti
                    conoscere
                  </p>
                </ListGroup.Item>

                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi grado di formazione
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p
                    className="fs-8 text-secondary mb-0 fw-bold"
                    onClick={() => {
                      props.setShow(false);
                      setShow1(true);
                    }}
                  >
                    {" "}
                    Aggiungi posizione lavorativa
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi pausa lavorativa
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi competenze
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Collapse>
          <div className="d-grid gap-2">
            <Button
              onClick={() => setOpen2(!open2)}
              aria-controls="example-collapse-text"
              aria-expanded={open2}
              size="lg"
              variant="light"
              className="bg-white border-0 d-flex align-items-center justify-content-between"
            >
              <p className="mb-0 fw-bold">
                Sezioni consigliate
              </p>
              <p className="mb-0 fw-bold">
                {open2 ? (
                  <i className="bi bi-caret-up"></i>
                ) : (
                  <i className="bi bi-caret-down"></i>
                )}{" "}
              </p>
            </Button>
          </div>

          <Collapse in={open2}>
            <div id="example-collapse-text">
              <ListGroup>
                <ListGroup.Item>
                  <p className="fs-8 text-secondary mb-0 ">
                    Completando queste sezioni aumenterai la
                    tua credibilità e potrei accedere a più
                    opportunità
                  </p>
                </ListGroup.Item>

                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi elementi in primo piano
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi licenze e certificazioni
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi progetti
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi corsi
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi referenze
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Collapse>
          <div className="d-grid gap-2">
            <Button
              onClick={() => setOpen3(!open3)}
              aria-controls="example-collapse-text"
              aria-expanded={open3}
              size="lg"
              variant="light"
              className="bg-white border-0 d-flex align-items-center justify-content-between"
            >
              <p className="mb-0 fw-bold">Altro</p>
              <p className="mb-0 fw-bold">
                {open3 ? (
                  <i className="bi bi-caret-up"></i>
                ) : (
                  <i className="bi bi-caret-down"></i>
                )}{" "}
              </p>
            </Button>
          </div>

          <Collapse in={open3}>
            <div id="example-collapse-text">
              <ListGroup>
                <ListGroup.Item>
                  <p className="fs-8 text-secondary mb-0 ">
                    Conferisci ancora più personalità al tuo
                    profilo. Queste sezioni ti aiuteranno a
                    espandere la tua rete e istaurare più
                    relazioni lavorative.
                  </p>
                </ListGroup.Item>

                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi esperienza di volontariato
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi pubblicazioni
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi brevetti
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi riconoscimenti e premi
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi votazioni esame
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi lingue
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi organizzazioni
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="border-bottom">
                  <p className="fs-8 text-secondary mb-0 fw-bold">
                    Aggiungi cause
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Collapse>
        </Modal.Body>
      </Modal>
      <ModalForm
        show1={show1}
        handleClose1={handleClose1}
        putOrDeleteExperienc={false}
      />
    </>
  );
};
export default ModalInformation;
