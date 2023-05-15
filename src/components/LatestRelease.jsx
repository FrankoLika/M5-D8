import { Container, Row, Col, Form, Button } from "react-bootstrap"
import React from "react"
import books from "../books/fantasy.json"
import { SingleBook } from "./SingleBook"
export class LatestRelease extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          {books
            .filter((book) =>
              book.title.toLowerCase().includes(this.props.query.toLowerCase())
            )
            .map((book) => (
              <Col xl={4} key={`book_${book.asin}`}>
                <SingleBook setSelected={(id)=> this.props.setSelected(id) } selected={this.props.selected} book={book} />
              </Col>
            ))}
        </Row>
      </Container>
    )
  }
}
