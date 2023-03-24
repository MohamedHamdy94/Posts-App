import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostComments } from '../redux/actions/Posts';
import Post from '../Components/Post/Post';
import { Col, Row } from 'react-bootstrap';
import SpinnerComponent from '../Components/Spinner/Spinner';

export default function PostDetails() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.Posts.posts);
  const comments = useSelector((state) => state.Posts.post);

  const { id } = useParams();

  console.log(id);
  const post = posts.find((item) => item.id == id);
  console.log(comments);
  console.log(post);
  useEffect(() => {
    dispatch(getPostComments(id));
  }, [id]);
  const loading = useSelector((state) => state.Loader.loader);

  return (
    <>
      <Post post={post} />

      <Row className="justify-content-md-center">
        <Col xs>
          <hr />
          <h3>Comments</h3>
        </Col>
      </Row>

      {loading ? (
        <SpinnerComponent className="home" />
      ) : (
<>
      {comments.map((comment) => {
        return (
          <Card>
            <Card.Header>{comment.email}</Card.Header>

            <Card.Body>
              <Card.Title>{comment.name}</Card.Title>
              <Card.Text>{comment.body}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}

</>)}
    </>
  );
}
