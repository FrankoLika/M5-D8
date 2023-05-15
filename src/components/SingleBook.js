import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import CommentsModal from './CommentsModal';
import { Link } from 'react-router-dom';

const SingleBook = ({ book }) => {

    const [commentsModal, setCommentsModal] = useState(false)
    const toggleModal = () => setCommentsModal(!commentsModal)

    return (
        <>
            <Card key={book.asin} style={{ width: '13rem', height: '34rem' }}
            >
                <Card.Img style={{ height: '20rem' }} src={book.img} />
                <Card.Body>
                    <Card.Text className='h-50'>{book.title}</Card.Text>
                    <Button variant='warning' onClick={toggleModal}>Comments</Button>
                    <Link
                        to={`/book/${book.asin}`}
                        className='text-white'
                        style={{ textDecoration: "none" }}
                    >
                        <Button variant='danger' className='mt-2'>
                            Details
                        </Button>
                    </Link>
                </Card.Body>
            </Card>

            {commentsModal && <CommentsModal asin={book.asin} closeFn={toggleModal} />}
        </>
    );
}

export default SingleBook