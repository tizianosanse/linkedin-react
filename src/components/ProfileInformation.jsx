import { useEffect } from "react";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap/esm";
import { useDispatch, useSelector } from "react-redux";
import { getInformation } from "../redux/actions/ProfileInformationActions";

const ProfileInformation = () => {
  const information = useSelector(
    (state) => state.ProfileInformation.content
  );

  const dispatch = useDispatch();
  console.log(information);
  useEffect(() => {
    dispatch(getInformation());
  }, []);

  return (
    <>
      <div className=" mt-2 position-relative">
        <Image
          src="https://media.licdn.com/dms/image/C4D12AQHMPBvE3avWzg/article-inline_image-shrink_1000_1488/0/1616872522462?e=1720051200&v=beta&t=SM7tWeubIJQskb6VjQynq66L5UQjrV8ASWrpfitxJQI"
          alt="background profile"
          className="backgroundProfileImage  w-100 rounded-top-4"
        />
        <div className="d-flex position-absolute top-0 end-0 mt-5 me-4 border rounded-circle p-2 bg-white photocamera">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            height="15px"
            width="15px"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 487 487"
          >
            <g>
              <g>
                <path d="M308.1,277.95c0,35.7-28.9,64.6-64.6,64.6s-64.6-28.9-64.6-64.6s28.9-64.6,64.6-64.6S308.1,242.25,308.1,277.95z     M440.3,116.05c25.8,0,46.7,20.9,46.7,46.7v122.4v103.8c0,27.5-22.3,49.8-49.8,49.8H49.8c-27.5,0-49.8-22.3-49.8-49.8v-103.9    v-122.3l0,0c0-25.8,20.9-46.7,46.7-46.7h93.4l4.4-18.6c6.7-28.8,32.4-49.2,62-49.2h74.1c29.6,0,55.3,20.4,62,49.2l4.3,18.6H440.3z     M97.4,183.45c0-12.9-10.5-23.4-23.4-23.4c-13,0-23.5,10.5-23.5,23.4s10.5,23.4,23.4,23.4C86.9,206.95,97.4,196.45,97.4,183.45z     M358.7,277.95c0-63.6-51.6-115.2-115.2-115.2s-115.2,51.6-115.2,115.2s51.6,115.2,115.2,115.2S358.7,341.55,358.7,277.95z" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="ProfileInformation p-4 rounded-bottom-4 border border-1 position-relative">
        <Image
          src={information.image}
          alt="Profile picture"
          width={150}
          height={150}
          className="rounded-circle position-absolute border border-white border-5 "
        />
        <div className="d-flex position-absolute top-0 end-0 mt-3 me-4 pencil rounded-circle p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="30px"
            height="30px"
            viewBox="-6.5 0 32 32"
            version="1.1"
          >
            <title>pencil</title>
            <path d="M19.28 10.32c0-0.24-0.080-0.44-0.24-0.6l-3.12-3.12c-0.32-0.32-0.84-0.32-1.2 0l-2.36 2.36-11.32 11.36c-0.12 0.12-0.2 0.28-0.24 0.44l-0.8 3.92c-0.040 0.28 0.040 0.56 0.24 0.76 0.16 0.16 0.36 0.24 0.6 0.24 0.040 0 0.12 0 0.16 0l3.92-0.8c0.16-0.040 0.32-0.12 0.44-0.24l13.68-13.68c0.16-0.2 0.24-0.4 0.24-0.64zM4.32 23.24l-2.44 0.48 0.52-2.4 10.56-10.56 1.92 1.92-10.56 10.56zM16.080 11.52l-1.92-1.92 1.2-1.2 1.92 1.92-1.2 1.2z" />
          </svg>
        </div>
        <h1 className="fs-3 mb-0 mt-5 ">
          {information.name}
          {information.surname}
        </h1>
        <h2 className="fw-normal">{information.title}</h2>
        <h3 className="lead d-inline-block me-2">
          {information.area}{" "}
        </h3>
        <a href="#" className="fw-semibold">
          Informazioni di contatto
        </a>
        <div>
          <a href="#" className="fw-semibold  mt-2">
            5 collegamenti
          </a>
        </div>
        <Button
          variant="primary"
          className="fw-bold mt-3 rounded-pill btn-disponibile-per"
        >
          Disponibile per
        </Button>
        <Button
          variant="outline-primary"
          className="fw-semibold mt-3 rounded-pill ms-2 btn-aggiungi-sezione"
        >
          Aggiungi sezione del profilo
        </Button>
        <Button
          variant="outline-dark"
          className="fw-semibold mt-3 rounded-pill ms-2 btn-altro"
        >
          Altro
        </Button>
        <div className="DisponibileALavorare mt-4 p-3 w-50 rounded-3">
          <h3 className="mb-0 fw-semibold">
            Disponibile a lavorare
          </h3>
          <h2 className="mb-0 fw-normal">
            Ruoli di {information.title}
          </h2>
          <a href="#" className="fw-semibold">
            Mostra dettagli
          </a>
        </div>
      </div>
    </>
  );
};

export default ProfileInformation;
