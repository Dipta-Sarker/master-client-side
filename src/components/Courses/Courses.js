import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLoaderData } from 'react-router-dom';
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
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item className='my-2'>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item className='my-2'>Vestibulum at eros</ListGroup.Item>
         </ListGroup>
          </Col>
        </Row>
      </Container>
    );
};

export default Courses;