import { useEffect, useState } from 'react';
import { getPosts } from '../redux/actions/Posts';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import {  Col, Row } from 'react-bootstrap';
import SpinnerComponent from '../Components/Spinner/Spinner';
import Post from '../Components/Post/Post';

export default function Posts() {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  },[]);
  const posts = useSelector((state) => state.Posts.posts);
   const loading = useSelector((state) => state.Loader.loader);

  return (
    <>
      <Row className="justify-content-md-center mb-3">
        <Col lg="8">
          <Form >
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Form>
        </Col>
      </Row>

      {loading ? (
        <SpinnerComponent className="home" />
      ) : (
        <Row xs={1} md={4} className="g-3">
          {posts
            .filter((val) => {
              if (searchText == '') {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return val;
              }
            })
            .map((post, i) => {
              return (
                <div key={i}>
                  <Post post={post} />
                </div>
              );
            })}
        </Row>
      )}
    </>
  );
}
