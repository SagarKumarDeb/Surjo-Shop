import React from 'react';
import './Product.css';

const Product = (props) => {

    const {img, name, price, seller, rating} = props.product;
    return (
        <div className='product'>
            
                <img src={img} alt=""/>
                
                    <h6 className='product-name'>{name}</h6>
                    <div className='paragraph'>
                        <p>Price:${price}</p>
                        <p>Manufacturer:{seller}</p>
                        <p>Rating:{rating}</p>
                    </div>
                    <button className='button-cart'>Add to cart</button>

                
        </div>
    );
};

export default Product;