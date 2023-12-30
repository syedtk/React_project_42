import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const ContactDetails = () => {
    const usersSingle = useLoaderData()
    const {name,website,phone,email, } = usersSingle;
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <div className='py-5'>
            <h3 className='py-5 text-center  '>
                 User Details  
            </h3>
            <div className='card w-25 container pb-4'>
                <img src="" alt="" />
                <div className='text-center'>
                <Card.Img variant="top" src="https://iau.edu.lc/wp-content/uploads/2016/09/dummy-image.jpg" />
                    <h4 className='card-title'>{name}</h4>
                    <h5 className='card-title'>{email}</h5>
                    <p className='card-title'>{website}</p>
                    <p className='card-title'>{phone}</p>
                </div>
                <Link to='/' className='btn btn-danger '>Back to Home page</Link>
            </div>

        </div>
    );
};

export default ContactDetails;