import React from "react";

import { ListGroup, Badge } from "react-bootstrap";

const CommentList = ({ comments }) => {
  return (
    <>
      {comments &&
        comments.length > 0 &&
        comments.map((comment) => (
          <ListGroup key={comment._id}>
            <ListGroup.Item>
              <Badge pill variant="info" className="mr-3">
                {comment.rate}
              </Badge>
              {comment.comment}
            </ListGroup.Item>
          </ListGroup>
        ))}
    </>
  );
};

export default CommentList;
