import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
const Course = ({course}) => {
    const {id, title,img} = course;
    console.log(img)
    return (
        <Col lg='6'>
            <Card style={{ width: '18rem' }}>
                <Card.Img  style={{height:'171px'}} variant="top" src={img} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text> */}
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;