import { Col, Container, Row } from "react-bootstrap";

import ProfileCardHome from "./ProfileCardHome";
import NewPostHome from "./NewPostHome";
import PostHome from "./PostHome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPostsAction } from "../../redux/actions/Post";

const MyHome = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.Post.content);
  console.log(posts);
  useEffect(() => {
    dispatch(getPostsAction());
  }, []);
  return (
    <>
      <Container className="my-3">
        <Row className="justify-content-between">
          <Col xs={2} md={2} lg={2}>
            <ProfileCardHome />
          </Col>
          <Col xs={7} md={7} lg={7}>
            <NewPostHome />
            {posts.length > 0 &&
              posts
                .reverse()
                .slice(0, 30)
                .map((post) => {
                  return <PostHome post={post} key={post._id} />;
                })}
          </Col>
          <Col xs={3} md={3} lg={3}></Col>
        </Row>
      </Container>
    </>
  );
};
export default MyHome;
