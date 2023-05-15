import { Container, Row, Col, Form, Button } from "react-bootstrap"
import React from "react"
import books from "../books/fantasy.json"
import { SingleBook } from "./SingleBook"
import { CommentList } from "./CommentsList"
import { AddComment } from "./AddComment"
export class CommentArea extends React.Component {
  state = {
    comments: [],
    book: {}
  }
  fetchBook = async () => {
    const found = books.filter(book => book.asin === this.props.id)[0]
    this.setState({book: found})
  }
  fetchComments = async () => {
    const res = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,
      {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWU3MWIxNGE1MTAwMTQ2NjQwMDciLCJpYXQiOjE2ODM4Mjg5OTYsImV4cCI6MTY4NTAzODU5Nn0.sdNyhwKUliMQcXxyWGtaz43ynbCnuYlBTd63ecWFZwQ",
        },
      }
    )
    const comments = await res.json()
    this.setState({ comments: comments.reverse() })
  }
  componentDidMount() {
    this.fetchBook()
    this.fetchComments()
  }
  componentDidUpdate(prevProps) {
    if(this.props.id !== prevProps.id) {
      this.fetchComments()
      this.fetchBook()
    }
  }
  render() {
    return (
      <div className="">
        <SingleBook setSelected={()=> 0} book={this.state.book} selected={null}/>
        <AddComment id={this.props.id} updateComments={this.fetchComments} />
        <h3>Commenti:</h3> <CommentList comments={this.state.comments} />
      </div>
    )
  }
}
