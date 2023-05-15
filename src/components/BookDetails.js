import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import { PersonCircle } from 'react-bootstrap-icons'

const BookDetails = () => {
    const { asin } = useParams()

    const [book, setBook] = useState([])
    const [comments, setComments] = useState([])

    const getBook = async () => {
        const data = await fetch(`https://epibooks.onrender.com/${asin}`)
        const response = await data.json()
        setBook(response)
    }
    const getComments = async () => {
        const data = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWU3MWIxNGE1MTAwMTQ2NjQwMDciLCJpYXQiOjE2ODM1NDE2MTUsImV4cCI6MTY4NDc1MTIxNX0.qZmR6zdxxm7qIz-vaOuZI6eaxpo2U-qQILNeRmPcsRY"
                },
            });
        const response = await data.json()
        setComments(response)
    }

    useEffect(() => {
        getBook()
        getComments()
    }, [])

    console.log(book)
    return (
        <>
            {book.map((item) => {
                return (
                    <div className='bg-dark' style={{ height: "569px" }}>
                        <Container fluid>
                            <Row>
                                <div>
                                    <Link to={"/"}
                                        style={{ textDecoration: "none" }}
                                        className='text-danger fs-2'
                                    >
                                        Home
                                    </Link>
                                </div>
                                <Col sm={12} md={6} className='d-flex justify-content-center'>
                                    <Card
                                        style={{ width: '13rem', height: '25rem' }}
                                    >
                                        <Card.Img style={{ height: '20rem' }} src={item.img} />
                                        <Card.Body>
                                            <Card.Text className='h-50'><b>{item.title}</b></Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <Card
                                        style={{ width: '13rem', height: '10rem' }}
                                        className='mx-2'
                                    >
                                        <Card.Body>
                                            <Card.Text><b>Asin:</b> {item.asin}</Card.Text>
                                            <Card.Text><b>Price:</b> {item.price}</Card.Text>
                                            <Card.Text><b>Category:</b> {item.category}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6}>
                                    <h3 className='text-white'>Comments</h3>
                                    {comments.map((comment) => {
                                        return (
                                            <div
                                                className='text-black bg-warning mt-2 rounded d-flex shadow-sm'
                                                key={nanoid()}
                                            >
                                                <div
                                                    className='d-flex d-flex align-items-center'

                                                >
                                                    <PersonCircle className='mx-3' size={25} />
                                                    <p>{comment.author} :</p>
                                                </div>
                                                <div className='mx-5'>
                                                    {comment.comment}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )
            })}
        </>
    )
}

export default BookDetails