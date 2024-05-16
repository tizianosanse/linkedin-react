import { Button, Card, Image } from "react-bootstrap";

const PostHome = (props) => {
  const getYearAndMonth = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.toLocaleString("default", {
      month: "long",
    });

    return `${day} ${month} ${year}`;
  };
  return (
    <>
      <Card
        style={{
          padding: "10px 20px",
          borderRadius: "10px",
        }}
        className="mt-1"
      >
        <div className="d-flex align-items-center">
          <Image
            src={
              props.post.user.image
                ? props.post.user.image
                : "https://mhcid.washington.edu/wp-content/uploads/2021/12/placeholder-user-scaled.jpg"
            }
            width={48}
            height={48}
            className="imageUserNavbar"
          ></Image>
          <div className="mx-2">
            <p className="m-0 fontSizeQuattordici fw-bold">
              {props.post.user && props.post.user.name && props.post.user.surname
                ? props.post.user.name + " " + props.post.user.surname
                : props.post.username}
            </p>
            <p className="m-0 fontSizeDodici">
              {props.post.user && props.post.user.title ? props.post.user.title : "Professione non specificata"}
            </p>
            <p className="m-0 fontSizeDodici">{getYearAndMonth(props.post.createdAt)}</p>
          </div>
        </div>
        <p className="mt-3">{props.post.text}</p>
        <Card.Img
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png"
          className="imagePostHome"
        />
        <Card.Footer className="mt-3 bg-white">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <span className="mx-2 d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-hand-thumbs-up"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                </svg>
              </span>
              <p className="m-0 textP fw-bold postActionsColor"> Consiglia</p>
            </div>
            <div className="d-flex align-items-center">
              <span className="mx-2 d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chat-right-text"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                </svg>
              </span>
              <p className="m-0 textP fw-bold postActionsColor">Commenta</p>
            </div>
            <div className="d-flex align-items-center">
              <span className="mx-2 d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-repeat"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
                </svg>
              </span>
              <p className="m-0 textP fw-bold postActionsColor">Diffondi il post</p>
            </div>
            <div className="d-flex align-items-center">
              <span className="mx-2 d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-send-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                </svg>
              </span>
              <p className="m-0 textP fw-bold postActionsColor">Invia</p>
            </div>
          </div>
          <div className="congratulationsPost d-flex justify-content-between mt-3">
            <Button>
              Congratulazioni, {props.post.user && props.post.user.name ? props.post.user.name : props.post.username} !
            </Button>
            <Button>Sono felice per te!</Button>
            <Button>👍</Button>
            <Button>Ottimo!</Button>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};
export default PostHome;
