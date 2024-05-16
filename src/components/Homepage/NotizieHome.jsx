import { useEffect, useState } from "react";
import { Card, ListGroup, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getNewsAction } from "../../redux/actions/WorldNews";

const NotizieHome = () => {
  const [moreNews, setMoreNews] = useState(false);
  const infoNews = useSelector((state) => state.WorldNews.content);

  const dispatch = useDispatch();
  const randomLectures = () => {
    return Math.floor(Math.random() * 9000);
  };
  const getYearAndMonth = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDay();
    const year = date.getFullYear();
    const month = date.toLocaleString("default", {
      month: "long",
    });
    return `${day} ${month} ${year}`;
  };
  useEffect(() => {
    dispatch(getNewsAction());
  }, []);
  return (
    <>
      <Card className="cardNotizieHome p-2 mb-2">
        <div className="paddingSedici">
          <h6 className="fw-bold fs-5" id="linkedinNotizieTitle">
            Linkedin Notizie{" "}
          </h6>
          <p className="fw-semibold textColorLightGrey">Storie principali</p>
        </div>
        {moreNews === false && (
          <>
            <ListGroup>
              {infoNews &&
                infoNews.articles &&
                infoNews.articles.length > 0 &&
                infoNews.articles.slice(0, 5).map((dato, i) => {
                  return (
                    <ListGroup.Item className="fw-bold text-dark" key={`${i}job`}>
                      {dato.title}
                      <p className="textColorLightGrey m-0">
                        {getYearAndMonth(dato.publishedAt)}
                        <span> • {randomLectures()} lettori</span>
                      </p>
                    </ListGroup.Item>
                  );
                })}
            </ListGroup>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                setMoreNews(true);
              }}
            >
              <p className="fw-bold textP paddingSedici">
                Vedi altro
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
                  />
                </svg>
              </p>
            </span>
          </>
        )}
        {moreNews === true && (
          <>
            <ListGroup>
              {infoNews &&
                infoNews.articles &&
                infoNews.articles.length > 0 &&
                infoNews.articles.slice(0, 10).map((dato, i) => {
                  return (
                    <ListGroup.Item className="fw-bold text-dark" key={`${i}job`}>
                      {dato.title}
                      <p className="textColorLightGrey m-0">
                        {getYearAndMonth(dato.publishedAt)}
                        <span> • {randomLectures()} lettori</span>
                      </p>
                    </ListGroup.Item>
                  );
                })}
            </ListGroup>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                setMoreNews(false);
              }}
            >
              <p className="fw-bold textP paddingSedici">
                Meno dettagli
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
                  />
                </svg>
              </p>
            </span>
          </>
        )}
        <p className="fw-bold colorfontLightGray paddingSedici">
          I giochi di oggi <span className="spanNovitaNotizie">NOVITÀ</span>
        </p>
        <div className="d-flex paddingSedici">
          <Image src={"https://static.licdn.com/aero-v1/sc/h/25itbd3dpc6ockbgvdhot9qp1"} className="mx-2" />
          <div>
            <p className="fw-bold m-0">Queens</p>
            <p className="textColorLightGrey textP m-0">Incorona ogni regione</p>
          </div>
        </div>
      </Card>
    </>
  );
};
export default NotizieHome;
