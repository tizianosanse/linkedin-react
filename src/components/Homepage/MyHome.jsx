import { Col, Container, Row } from "react-bootstrap";

import ProfileCardHome from "./ProfileCardHome";
import NewPostHome from "./NewPostHome";
import PostHome from "./PostHome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPostsAction } from "../../redux/actions/Post";
import NotizieHome from "./NotizieHome";
import Message from "../Message";
import Advertisements from "../Advertisements";
import FooterHome from "./FooterHome";
import ProfileCardHomeResp from "./ProfileCardHomeResp";

const MyHome = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.Post.content);
  console.log(posts);
  const [visiblePost, setVisiblePost] = useState(30);
  const [isLoading, setIsLoading] = useState(false);

  window.addEventListener("scroll", () => {
    const bottomOfPage =
      document.body.scrollHeight - window.innerHeight;
    if (window.scrollY >= bottomOfPage && !isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setVisiblePost(visiblePost + 30);
        setIsLoading(false);
      }, 3000);
    }
  });
  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  return (
    <>
      <Container className="my-3">
        <Row className="justify-content-between">
          <Col
            xs={0}
            md={3}
            lg={2}
            className="d-none d-md-block"
          >
            <ProfileCardHome />
          </Col>
          <Col xs={12} md={9} lg={7}>
            <ProfileCardHomeResp />
            <NewPostHome />
            {posts.length > 0 &&
              posts
                .reverse()
                .slice(0, visiblePost)
                .map((post) => {
                  return (
                    <PostHome
                      post={post}
                      key={post._id}
                      isLoading={isLoading}
                    />
                  );
                })}
            <Message />
          </Col>
          <Col xs={0} lg={3} className="d-none d-lg-block">
            <NotizieHome />
            <Advertisements />
            <FooterHome />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MyHome;
