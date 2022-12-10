import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import {FaStar} from "react-icons/fa";



const CourseDetails = () => {
    const course = useLoaderData()
    const {id, title,img,details,price,rating} = course;
    return (
        <Card className="text-center my-5 w-50 mx-auto">
            <Card.Header>Featured</Card.Header>
            <Card.Img  variant="top" src={img} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {details}
            </Card.Text>
           <Link to={`/checkout/${id}`}><Button variant="primary">Get premium access</Button></Link>
            </Card.Body>
            <Card.Footer className="text-muted">
                <div className='d-flex justify-content-between'>
                    <p className='fw-bold fs-4 d-flex align-items-center'>{rating} <FaStar/><FaStar/><FaStar/><FaStar/></p>
                    <p className="fw-bold fs-4">$ {price}</p>
                </div>
            </Card.Footer>
      </Card>
    );
};

export default CourseDetails;