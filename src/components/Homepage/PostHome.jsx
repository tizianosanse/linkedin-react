import { Card, Image } from "react-bootstrap";

const PostHome = () => {
  return (
    <>
      <Card style={{ padding: "10px 20px" }} className="mt-1">
        <div className="d-flex align-items-center">
          <Image
            src={"https://mhcid.washington.edu/wp-content/uploads/2021/12/placeholder-user-scaled.jpg"}
            width={48}
            height={48}
            className="imageUserNavbar"
          ></Image>
          <div className="mx-2">
            <p className="m-0 fontSizeQuattordici fw-bold">Nome Cognome</p>
            <p className="m-0 fontSizeDodici">Professione lavorativa titolo</p>
            <p className="m-0 fontSizeDodici">2 giorni</p>
          </div>
        </div>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptas minima dicta cupiditate excepturi quasi
          odio dolorum tempore aut est rem dolorem repellat, enim dolore esse porro accusantium incidunt omnis. Harum
          libero, impedit, nam neque laborum adipisci possimus reiciendis ex ratione, nesciunt ipsam enim obcaecati
          consequuntur expedita facere praesentium laudantium...
        </p>
        <Card.Img
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png"
          className="imagePostHome"
        />
      </Card>
    </>
  );
};
export default PostHome;
