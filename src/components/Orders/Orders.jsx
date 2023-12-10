import React from 'react';
import Cart from './../Cart/Cart';
import { useLoaderData } from 'react-router-dom';




const Orders = () => {
    const cart = useLoaderData();

    return (

    <div className='Shop-container'>
        <div className='Products- container'>
            <h2>Orders page: {cart.length}</h2>
        </div>
        
        <div className=''>
            <Cart cart={cart}></Cart>
        </div>
    </div>
    );

};

export default Orders;