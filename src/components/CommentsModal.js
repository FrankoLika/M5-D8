import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/CommentsModal.css'
import ListGroup from 'react-bootstrap/ListGroup';
import RatingSystem from './RatingSystem';
import useFetch from '../hooks/useFetch';
import { useState } from 'react';
import AddComments from './AddComments';
import { nanoid } from 'nanoid';
import { Trash3 } from 'react-bootstrap-icons';

function CommentsModal({ asin, closeFn }) {

    const { data, loading, error } = useFetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`);
    const [comments, setComments] = useState(false);

    const toggleComments = () => {
        setComments(true)
    }

    const deleteComment = async (id) => {
        try {
            const data = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWU3MWIxNGE1MTAwMTQ2NjQwMDciLCJpYXQiOjE2ODM1NDE2MTUsImV4cCI6MTY4NDc1MTIxNX0.qZmR6zdxxm7qIz-vaOuZI6eaxpo2U-qQILNeRmPcsRY"
                }
            })
            window.location.reload() //l'ho messo così al cancellamento del commento si refresha la pagina
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div
            className="modal show comment-modal"
            style={{ display: 'block' }}
        >
            <Modal.Dialog centered size='lg'>
                <Modal.Header>
                    <Modal.Title>Comments</Modal.Title>
                    <Button
                        variant='warning'
                        className='border-0 text-white'
                        onClick={toggleComments}
                    >
                        Add Comment
                    </Button>
                </Modal.Header>

                <Modal.Body>
                    {comments && <AddComments asin={asin} />}
                    {loading && <div>caricamento in corso..</div>}
                    <ListGroup className='mt-5'>
                        {(!loading && !error && data && data.map((comment) => {
                            return (
                                <ListGroup.Item key={nanoid()} className='d-flex justify-content-between align-items-start'>
                                    <div className='ms-2 me-auto '>
                                        <div>
                                            {comment.comment}
                                        </div>
                                        <div>
                                            Relativo al libro : {comment.elementId}
                                        </div>
                                    </div>
                                    <RatingSystem stars={comment.rate} />
                                    <Trash3
                                        className='mx-3'
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            deleteComment(comment._id)
                                        }}
                                    >
                                    </Trash3>
                                </ListGroup.Item>
                            )
                        }))}
                    </ListGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={closeFn}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default CommentsModal;