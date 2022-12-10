import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { authContex } from '../../Contexs/Contexs';

const Login = () => {

    const {sinInWithGoogle} = useContext(authContex)

    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
    }

    const loginWithGoogle = () =>{
        sinInWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user)
        })

        .catch(e => console.error(e.message))
    }

    return (
        <div className="container mt-5">
        <div className="row">
            <div className="col-4">
            <Button onClick={loginWithGoogle} variant="success" className='me-2'><FaGoogle/> Google</Button>
            <Button variant="secondary"><FaGithub/> Github</Button>
            </div>
            <div className="col-8">
            <Form onSubmit={handleSubmit} className=' mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            <p className='mt-3 text-center'>New to Master ? <Link to='/register'>Register</Link></p>
            </div>
        </div>
        </div>
    );
};

export default Login;