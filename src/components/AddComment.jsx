import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap"
import React, { useEffect, useState } from "react"
export const AddComment = (props) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: "3",
    elementId: props.id,
  })

  const handleChange = async (ev) => {
    setComment({ ...comment, [ev.target.id]: ev.target.value })
  }
  const postComment = async () => {
    const res = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWU3MWIxNGE1MTAwMTQ2NjQwMDciLCJpYXQiOjE2ODM4Mjg5OTYsImV4cCI6MTY4NTAzODU5Nn0.sdNyhwKUliMQcXxyWGtaz43ynbCnuYlBTd63ecWFZwQ",
        },
        body: JSON.stringify(comment),
      }
    )
    if (res.ok) {
      props.updateComments()
    }
  }
  useEffect(() => {
    setComment({ ...comment, elementId: props.id })
  }, [props.id])

  return (
    <Form.Group>
      <Form.Control
        onChange={handleChange}
        type="text"
        id="comment"
        value={comment.comment}
        placeholder="Scrivi un commento"
      />
      <div className="d-flex my-1">
        <Form.Control
          className="mr-3"
          onChange={setComment}
          type="number"
          max={5}
          min={1}
          id="rate"
          value={comment.rate}
          placeholder="Scrivi un commento"
        />
        <Button onClick={postComment}>Invia</Button>
      </div>
    </Form.Group>
  )
}
