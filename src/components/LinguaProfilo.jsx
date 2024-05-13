import { Button, Card, ListGroup } from "react-bootstrap";

const LinguaProfilo = () => {
  return (
    <>
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Button
              variant="btn"
              className="text-black"
              size="sm"
            >
              {/* <img
                width="48"
                height="48"
                src="https://img.icons8.com/parakeet-line/48/pencil.png"
                alt="pencil"
                className="img-fluid"
              /> */}
              <a
                target="_blank"
                href="https://icons8.com/icon/dvZ3QGGN2K9v/pencil"
              >
                Pencil
              </a>{" "}
              icon by{" "}
              <a target="_blank" href="https://icons8.com">
                Icons8
              </a>
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            Dapibus ac facilisis in
          </ListGroup.Item>
          <ListGroup.Item>
            Vestibulum at eros
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};
export default LinguaProfilo;
