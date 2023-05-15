import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap"
import React from "react"
import books from "../books/fantasy.json"
import { SingleBook } from "./SingleBook"
import { SingleComment } from "./SingleComment"
export class CommentList extends React.Component {
  render() {
    return (
      <ListGroup>
        {this.props.comments.slice(0, 7).map((comment) => (
          <SingleComment key={`comment_${comment._id}`} comment={comment} />
        ))}
      </ListGroup>
    )
  }
}
