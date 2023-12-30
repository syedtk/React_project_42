import React, { useEffect } from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FetchData = ({user,idx}) => {
    const {id,name,email,username} = user ;
    useEffect(() => {
    window.scrollTo(0,0)
    },[]) 
    return (
        <div className='mb-4 '>
            <Container className='my-5 pt-5'>
            <Col key={idx}> 
                <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="https://iau.edu.lc/wp-content/uploads/2016/09/dummy-image.jpg" />
                    <Card.Text>ID:{id}</Card.Text>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>User Name: {username}</Card.Text>
                    <Card.Footer>Email: {email}</Card.Footer>
                    <Link to={`/details/${id}`} className='btn btn-info w-100'>Show Details</Link>
                    </Card.Body>
                </Card>
            </Col>
            </Container>
        </div>
    );
};

export default FetchData;