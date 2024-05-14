import { useState } from "react";
import { Button, Card, Collapse } from "react-bootstrap";
import { useSelector } from "react-redux";

const Message = () => {
  const information = useSelector(
    (state) => state.ProfileInformation.content
  );
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="fixed d-flex align-items-center justify-centent-between"
        variant="white"
      >
        <div className="d-flex align-items-center">
          <img
            src={information.image}
            alt=""
            className="img-profiles rounded-circle mx-3"
          />{" "}
          <p className="fw-bold fs-7 m-0">Massaggistica</p>
        </div>
        <div className="d-flex align-items-center">
          <p className="fw-bold fs-5 mx-2 mb-0">
            <i className="bi bi-three-dots"></i>
          </p>
          <p className="fw-bold fs-5 mx-2 mb-0">
            <i className="bi bi-pencil-square"></i>
          </p>
          <p className="fw-bold fs-5 mx-2 mb-0">
            <i className="bi bi-caret-up"></i>
          </p>
        </div>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <Card
            body
            style={{ width: "400px" }}
            className="fixed"
          >
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              className="d-flex align-items-center justify-centent-between"
              variant="white"
            >
              <div className="d-flex align-items-center">
                <img
                  src={information.image}
                  alt=""
                  className="img-profiles rounded-circle mx-3"
                />{" "}
                <p className="fw-bold fs-7 m-0">
                  Massaggistica
                </p>
              </div>
              <div className="d-flex align-items-center">
                <p className="fw-bold fs-5 mx-2 mb-0">
                  <i className="bi bi-three-dots"></i>
                </p>
                <p className="fw-bold fs-5 mx-2 mb-0">
                  <i className="bi bi-pencil-square"></i>
                </p>
                <p className="fw-bold fs-5 mx-2 mb-0">
                  <i className="bi bi-caret-down"></i>
                </p>
              </div>
            </Button>
            Anim pariatur cliche reprehenderit, enim eiusmod
            high life accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica, craft beer labore
            wes anderson cred nesciunt sapiente ea proident.
          </Card>
        </div>
      </Collapse>
    </>
  );
};
export default Message;
