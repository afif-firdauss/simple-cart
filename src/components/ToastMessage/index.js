import React from 'react'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export default function ToastMessage({ show, toggle, message }) {
  return (
    <ToastContainer className="p-3" position='top-end'>
      <Toast onClose={toggle} show={show} delay={3000} autohide>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Simple Cart</strong>
          <small>Just now</small>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  )
}
