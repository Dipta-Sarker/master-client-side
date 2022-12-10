import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { authContex } from '../../Contexs/Contexs';
const Register = () => {

const {createAccount,updateProfileUser} = useContext(authContex)


    const handletoSubmit = (event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;


        createAccount(email,password)
        .then(result =>{
          const user = result.user;
          update(name,photoUrl)
          console.log(user)
        })
        .catch(e => console.error(e.message))
        form.reset()

        console.log(name, photoUrl,email,password)
    }

    const update = (name,photoUrl) =>{
      const profile = {displayName:name,photoURL:photoUrl}

      updateProfileUser(profile)
      .then(result =>{})
      .catch(error =>console.error(error.message))
    }

    return (
        <Form onSubmit={handletoSubmit} className='w-50 mx-auto mt-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Enter your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control name='photoUrl' type="text" placeholder="PhotoURL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
};

export default Register;