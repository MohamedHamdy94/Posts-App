import React from 'react';
import Card from 'react-bootstrap/Card';

import { Link, useParams } from 'react-router-dom';

export default function Post(props) {
  const { id } = useParams();

  const { post } = props;

  return (
    <Card>
      <Card.Body>
        <Card.Title
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100ch',
          }}
        >
          {post.title}
        </Card.Title>
        <Card.Text
          style={{
            whiteSpace: 'pre',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100ch',
          }}
        >
          {post.body}
        </Card.Text>
        {!id && <Link to={`post/${post.id}`}>Comments </Link>}
      </Card.Body>
    </Card>
  );
}
