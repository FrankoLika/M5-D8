import React, { useState, useRef } from 'react';
import { Button, FormControl, FormSelect } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function AddComments({ asin }) {
  const [formData, setFormData] = useState({ comment: "", rate: "" })
  const formRef = useRef()

  const isFormValid = () => {
    const { comment, rate } = formData
    const commentLength = comment.length;
    const rateLength = rate.length;

    if (commentLength > 0 && rateLength > 0) {
      return true
    }
    return false
  }

  const postComments = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWU3MWIxNGE1MTAwMTQ2NjQwMDciLCJpYXQiOjE2ODM1NDE2MTUsImV4cCI6MTY4NDc1MTIxNX0.qZmR6zdxxm7qIz-vaOuZI6eaxpo2U-qQILNeRmPcsRY"
        },
        body: JSON.stringify(formData)
      })
      formRef.current.reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form ref={formRef} onSubmit={postComments}>
      <FormControl rows="3" name="comment" placeholder='comments'
        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
      />
      <FormSelect name='rate' onChange={(e) => {
        console.log(e.target.value)
        setFormData({ ...formData, rate: e.target.value, elementId: asin })
      }
      }
      >
        <option disabled>Rate</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </FormSelect>
      <div className='d-flex justify-content-center'>
        <Button
          disabled={!isFormValid()}
          className='w-25 mt-3'
          type='submit'
          variant='success'
        >
          Send
        </Button>
      </div>
    </Form>
  );
}

export default AddComments;