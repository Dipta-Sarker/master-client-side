import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
const CourseDetails = () => {
    const course = useLoaderData()
    const {id, title,img,details} = course;
    return (
        <Card className="text-center my-5 w-50 mx-auto">
            <Card.Header>Featured</Card.Header>
            <Card.Img  variant="top" src={img} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {details}
            </Card.Text>
           <Link to={`/checkout/${id}`}><Button variant="primary">CheckOut</Button></Link>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    );
};

export default CourseDetails;