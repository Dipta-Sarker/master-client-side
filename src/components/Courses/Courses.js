import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useLoaderData } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Course from '../Course/Course';
import ListGroup from 'react-bootstrap/ListGroup';



const Courses = () => {
    const allcourses = useLoaderData()
    return (
        <Container className='mt-5'>
        <Row>
          <Col lg="9">
          <Container>
            <Row className='gy-5'>
            {
            allcourses.map(course =><Course key={course.id} course={course} ></Course>)
            }
            </Row>
          </Container>
          </Col>
          <Col lg="3">
          <ListGroup>
          <Link to='/' className="text-decoration-none"><ListGroup.Item>Home</ListGroup.Item></Link>
            <ListGroup.Item className='my-2'><Link className="text-decoration-none" to='/login'>Login</Link></ListGroup.Item>
            <ListGroup.Item><Link to='/register' className="text-decoration-none">Register</Link></ListGroup.Item>
            <ListGroup.Item className='my-2 text-decoration-none'><Link to='/blog'>Blog</Link></ListGroup.Item>
         </ListGroup>
          </Col>
        </Row>
      </Container>
    );
};

export default Courses;