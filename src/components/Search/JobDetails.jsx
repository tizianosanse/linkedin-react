import { Button, Col, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const JobDetails = () => {
  const jobs = useSelector((state) => state.Search.searchJobs);
  const stateID = useSelector((state) => state.Search.id);
  const id = stateID !== "" ? stateID : jobs.length > 0 ? jobs[0]._id : "";
  const job = jobs.filter((job) => job._id === id);
  console.log(stateID);
  return (
    <>
      <div className=" bg-white p-4 border border-1 jobDetail-page ">
        <Row>
          <Col xs={1}>
            <Image
              src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={24}
              height={24}
            />
          </Col>
          <Col xs={11} className="g-0 ">
            <h4 className="mb-0 mt-1">{job.length > 0 ? job[0].company_name : ""}</h4>
          </Col>
        </Row>
        <h1 className="mt-3">{job.length > 0 ? job[0].title : ""}</h1>
        <h3 className="fw-normal mt-3">
          {job.length > 0 ? job[0].candidate_required_location : ""}
          <span> · 3 mesi fa · Più di 100 canditati</span>
        </h3>
        <div className="d-flex align-items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="#666666"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
          </svg>

          <h5 className="mb-0 ms-2 fw-normal">{job.length > 0 ? job[0].job_type : ""}</h5>
        </div>
        <div className="d-flex align-items-center mt-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="#666666"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M4 2v20h16V2zm14 18h-4v-2h-4v2H6V4h12zm-7-8H8v-2h3zm0 4H8v-2h3zm5-4h-3v-2h3zm-5-4H8V6h3zm5 0h-3V6h3zm0 8h-3v-2h3z"></path>
          </svg>
          <h5 className="mb-0 ms-2 fw-normal">10-100 dipendenti</h5>
        </div>
        <div className="d-flex align-items-center mt-3 ">
          <i className="bi bi-list-check fs-4"></i>

          <h5 className="mb-0 ms-2 fw-normal">
            5 competenze su 6 corrispondono al tuo profilo, potresti avere un profilo adeguato
          </h5>
        </div>
        <div className="d-flex align-items-center mt-3 ">
          <i className="bi bi-lightbulb"></i>

          <h5 className="mb-0 ms-2 fw-normal">Vedi un confronto con oltre 100 altri candidati.</h5>
        </div>
        <Button variant="primary" className="fw-bold mt-3 rounded-pill btn-disponibile-per ms-md-2 btn-jobDetail">
          Candidati <i className="bi bi-box-arrow-up-right"></i>
        </Button>
        <Button variant="outline-primary" className="fw-semibold mt-3 rounded-pill ms-2 btn-alert ">
          Salva
        </Button>
        <h2 className="mt-3">Informazioni sull'offerta di lavoro</h2>
        <div className="mt-3" dangerouslySetInnerHTML={{ __html: job.length > 0 ? job[0].description : "" }} />
      </div>
    </>
  );
};
export default JobDetails;
