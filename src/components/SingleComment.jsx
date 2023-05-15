import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap"
import React from "react"
import books from "../books/fantasy.json"
import { SingleBook } from "./SingleBook"
export class SingleComment extends React.Component {
  render() {
    return (
        <ListGroup.Item>{this.props.comment.author} said: {this.props.comment.comment}</ListGroup.Item>
  
    )
  }
}
