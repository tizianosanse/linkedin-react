import { Card, ListGroup } from "react-bootstrap";

const Advertisements = () => {
  return (
    <>
      <Card className="my-3 sticky-md-top">
        <ListGroup>
          <ListGroup.Item>
            Annuncio pubblicitario
          </ListGroup.Item>
          <ListGroup.Item>
            Annuncio pubblicitario
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};
export default Advertisements;
