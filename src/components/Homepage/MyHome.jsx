import { Col, Container, Row } from "react-bootstrap";

import ProfileCardHome from "./ProfileCardHome";
import NewPostHome from "./NewPostHome";
import PostHome from "./PostHome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getComments, getPostsAction } from "../../redux/actions/Post";
import NotizieHome from "./NotizieHome";
import Message from "../Message";
import Advertisements from "../Advertisements";
import FooterHome from "./FooterHome";
import ProfileCardHomeResp from "./ProfileCardHomeResp";
import Loading from "../Loading";
import { profilesAction } from "../../redux/actions/Profiles";

const MyHome = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.Post.content);
  console.log(posts);
  const [visiblePost, setVisiblePost] = useState(30);

  const isLoading = useSelector((state) => state.LoadingReduce.content);
  const handleScroll = () => {
    const bottomOfPage = document.body.scrollHeight - window.innerHeight - 50;
    if (window.scrollY >= bottomOfPage && !isLoading) {
      setTimeout(() => {
        setVisiblePost((prevVisiblePost) => prevVisiblePost + 30);
      }, 3000);
    }
  };

  const comments = useSelector((state) => state.Post.comments);

  const users = useSelector((state) => state.Profiles.content);

  useEffect(() => {
    dispatch(getPostsAction());
    dispatch(getComments());
    dispatch(profilesAction());
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  return (
    <>
      <Container className="my-3">
        <Row className="justify-content-between">
          <Col xs={0} md={3} lg={2} className="d-none d-md-block">
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
                  return <PostHome post={post} key={post._id} comments={comments} users={users} />;
                })}
            {isLoading && <Loading />}

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
