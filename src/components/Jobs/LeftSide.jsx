import { Button } from "react-bootstrap";

const LeftSide = () => {
  return (
    <>
      <div className="bg-white rounded-4 p-3 leftSideJobsPage position-sticky ">
        <div className="d-flex align-items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
          </svg>

          <h2 className="mb-0 ms-2">Le mie offerte di lavoro</h2>
        </div>
        <div className="d-flex align-items-center mt-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M7 4a2 2 0 11-2-2 2 2 0 012 2zm2-1v2h12V3zm-4 7a2 2 0 102 2 2 2 0 00-2-2zm4 3h12v-2H9zm-4 5a2 2 0 102 2 2 2 0 00-2-2zm4 3h12v-2H9z"></path>
          </svg>

          <h2 className="mb-0 ms-2">Preferenze</h2>
        </div>
        <div className="d-flex align-items-center mt-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M14.73 10H17l-5.5 8L8 14.5l1.34-1.34L11.21 15zM20 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V3h5.69l.52-1A2 2 0 0112 1a2 2 0 011.76 1l.52 1zm-2 2h-2.6l.6 1.1V7H8v-.9L8.6 5H6v14a1 1 0 001 1h10a1 1 0 001-1z"></path>
          </svg>

          <h2 className="mb-0 ms-2">Valutazioni delle competenze</h2>
        </div>
        <div className="d-flex align-items-center mt-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
          </svg>

          <h2 className="mb-0 ms-2">Indicazioni per chi cerca lavoro</h2>
        </div>
      </div>
      <div className="d-flex justify-content-center button-side position-sticky">
        <Button
          variant="outline-primary"
          className="fw-semibold mt-3 rounded-pill d-flex align-items-center w-75 btn-alert  "
        >
          <i className="bi bi-pencil-square fs-5 me-4"></i> <p className="mb-0 me-3">Pubblica offerta gratuita</p>
        </Button>
      </div>
    </>
  );
};
export default LeftSide;
