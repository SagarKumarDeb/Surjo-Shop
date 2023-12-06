import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';

const Product = (props) => {

    const {img, name, price, seller, rating} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            
                <img src={img} alt=""/>
                
                    <h6 className='product-name'>{name}</h6>
                    <div className='paragraph'>
                        <p>Price:${price}</p>
                        <p>Manufacturer:{seller}</p>
                        <p>Rating:{rating}</p>
                    </div>
                    <button onClick={() => handleAddToCart(props.product)}className='button-cart'>Add to cart
                    <FontAwesomeIcon icon={faShoppingCart} /></button>

                
        </div>
    );
};

export default Product;