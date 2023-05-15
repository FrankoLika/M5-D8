import { Card, Button } from "react-bootstrap"
import React from "react"
import books from "../books/fantasy.json"
import { CommentArea } from "./CommentArea"
export class SingleBook extends React.Component {

  render() {
    return (
      <Card
       
        style={this.props.selected === this.props.book.asin ? { border: "2px red solid" } : {}}
      >
        <Card.Img  onClick={() => {
          this.props.setSelected(this.props.book.asin)
        }} variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    )
  }
}
