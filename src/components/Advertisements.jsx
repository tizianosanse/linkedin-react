import { Card, ListGroup } from "react-bootstrap";

const Advertisements = (props) => {
  return (
    <>
      <Card className={props.class}>
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
