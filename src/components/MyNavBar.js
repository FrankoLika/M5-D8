import React from 'react';
import { Navbar } from 'react-bootstrap';
import { BookFill } from 'react-bootstrap-icons'

function MyNavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className='d-flex justify-content-center'>
            <Navbar.Brand>
                <div className='d-flex align-items-center'>
                    <BookFill size={25} className="mr-2 mx-2 text-warning" />
                    <h3>
                        EpicBooks
                    </h3>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    );
}

export default MyNavBar;

