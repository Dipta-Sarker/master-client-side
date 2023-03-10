import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContex } from '../../Contexs/Contexs';

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

    const [error, setError] = useState(null)

    const {sinInWithGoogle,signIn,sinInWithGithub} = useContext(authContex)

    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
            event.target.reset()
            navigate(from,{replace:true})
        })
        .catch(e =>{
            const error = e.message;
            console.log(error)
            setError(error)
        })
        console.log(email,password)
       
    }


    const loginWithGithub = () =>{
        sinInWithGithub()
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(from,{replace:true})
        })
        .catch(e =>{
            const error = e.message;
            setError(error)
        })
    }


    const loginWithGoogle = () =>{
        sinInWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(from,{replace:true})
        })

        .catch(e => {
            const error = e.message;
            setError(error)
        })
    }

    return (
        <div className="container mt-5">
        <div className="row">
            <div className="col-4">
            <Button onClick={loginWithGoogle} variant="success" className='me-2'><FaGoogle/> Google</Button>
            <Button onClick={loginWithGithub} variant="secondary"><FaGithub/> Github</Button>
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
            <h4 className='text-center text-danger'>{error}</h4>
        </div>
        </div>
    );
};

export default Login;