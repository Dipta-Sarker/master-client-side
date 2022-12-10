import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const data = useLoaderData()
    console.log(data)

    return (
        <div>
            <h1 className='text-center'>{data.title}</h1>
        </div>
    );
};

export default Checkout;