import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { House, HouseDoorFill } from 'react-bootstrap-icons';
import "../styles/Body.css"
const SearchBar = ({ books, setBooks }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        if (searchTerm !== '') {
            const filterBooks = books.filter((book) =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setBooks(filterBooks);
        } else {
            setBooks(books);
        }
    };

    return (
        <Form
            className='d-flex justify-content-center SearchBar'
        >
            <HouseDoorFill
                style={{ cursor: "pointer" }}
                size={35}
                onClick={(e) => {
                    e.preventDefault()
                    setBooks(books)
                }
                }
            />
            <Form.Group className="mb-3 mx-3">
                <Form.Control
                    type='search'
                    placeholder="Cerca libro..."
                    onChange={(e) => [
                        setSearchTerm(e.target.value),
                        handleSearch()
                    ]
                    }

                />
            </Form.Group>
        </Form>
    )
}

export default SearchBar



