import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import books from "../books/fantasy.json"
import { CommentList } from "./CommentsList"
import { CommentArea } from "./CommentArea"
export const BookDetails = () => {
  const { id } = useParams()

  return (
    <Container>
      <CommentArea id={id} />
    </Container>
  )
}
