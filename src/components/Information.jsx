import { useSelector } from "react-redux";
import pencil from "../assets/icons8-pencil-48.png";
import { Image } from "react-bootstrap";

const Information = () => {
  const storeInformation = useSelector((state) => state.ProfileInformation.content);
  return (
    <div className="ProfileInformation mt-2 p-4 rounded-4 border border-1 position-relative">
      <div className="d-flex position-absolute top-0 end-0 mt-3 me-4 pencil1 rounded-circle p-1">
        <Image src={pencil} width={30} height={30} />
      </div>
      <h3 className="fs-5">Informazioni</h3>
      <div className="pe-3">
        <p className="mt-4 bio">{storeInformation.bio}</p>
      </div>
    </div>
  );
};

export default Information;
