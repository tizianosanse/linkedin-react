import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import pencil from "../assets/icons8-pencil-48.png";

const Activity = () => {
  return (
    <>
      <div className="ProfileInformation mt-2 p-4 rounded-4 border border-1 border-bottom-0 rounded-bottom-0  ">
        <div className="d-flex ">
          <div>
            <h3 className="mb-0 fs-5">Attività</h3>
            <Link to={"/"} className="fw-semibold ">
              5 Follower
            </Link>
          </div>
          <div className="ms-auto">
            <Button variant="outline-primary" className="fw-semibold mt-3 rounded-pill btn-aggiungi-sezione me-3">
              Crea un post
            </Button>
            <Image src={pencil} width={40} height={40} className="pencil1 rounded-circle p-1 mt-3" />
          </div>
        </div>

        <h3 className="mb-0 mt-3">Non hai ancora pubblicato nulla</h3>
        <p>I post che condividi appariranno qui</p>
      </div>
      <div className="ProfileInformation text-center showAllActivity p-3 border border-1 rounded-bottom">
        <h4 className="mb-0">Mostra tutte le attività</h4>
      </div>
    </>
  );
};

export default Activity;
