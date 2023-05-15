import React, { useState, useEffect } from 'react'
import SingleBook from './SingleBook'
import { Container, Col, Row } from 'react-bootstrap'
import { nanoid } from 'nanoid'
import SearchBar from './SearchBar'
import FixedColumnSx from "./FixedColumnSx"
import "../styles/Body.css"

const BookList = () => {
    const [books, setBooks] = useState([])
    const [FilteredBooks, setFilteredBooks] = useState([])
    const [priceRange, setPriceRange] = useState(true)

    const getBooks = async () => {
        const data = await fetch("https://epibooks.onrender.com/")
        const response = await data.json();
        setBooks(response)
        setFilteredBooks(response)
    }

    //queste funzioni qua sotto sono per filtrare i libri in base al prezzo
    //i bottoni su "FixedColumnSx.js" inidcano meno15€ e più15€
    //in base a quello che si schiaccia fa il filter del prezzo
    const getBooksMax15 = (priceRange) => {
        if (priceRange) {
            setFilteredBooks(books.filter(book => book.price < 15))
        }
    }
    const getBooksMin15 = (priceRange) => {
        if (!priceRange) {
            setFilteredBooks(books.filter(book => book.price > 15))
        }
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <Container>
            <Row>
                <Col xs={6} sm={8} md={3} lg={2}>
                    <FixedColumnSx
                        range={priceRange}
                        priceFunctionMax15={getBooksMax15}
                        priceFunctionMin15={getBooksMin15}
                        setPriceRange={setPriceRange}
                    />
                </Col>

                <Col xs={6} sm={4} md={9} lg={10}>
                    <SearchBar books={books} setBooks={setFilteredBooks} />
                    <Container className='d-flex justify-content-center flex-wrap gap-3'>
                        {FilteredBooks && FilteredBooks.map((book) => {
                            return (
                                <Row key={nanoid()}>
                                    <Col>
                                        <SingleBook book={book} />
                                    </Col>
                                </Row>
                            )
                        })}
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default BookList