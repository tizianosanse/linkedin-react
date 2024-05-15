import { Card } from "react-bootstrap";

const Advertisements = (props) => {
  return (
    <>
      <Card className={props.class}>
        <img
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          alt="annuncio"
          className="img-fluid"
        />
      </Card>
    </>
  );
};
export default Advertisements;
