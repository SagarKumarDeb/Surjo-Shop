import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart)
    

        {if(product.quantity === 0) {product.quantity=1};
        totalPrice = totalPrice + product.price*product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity; 
        
    }
        const tax = totalPrice*7/100;
        const grandTotal = totalPrice + totalShipping + tax;
    // const cart = props.cart;
    // const {cart} = props;

    return (
        

                <div className='Cart-container'><h5>Order summary</h5>
                <p>Selected items: {quantity}</p>
                <p>Total price:${totalPrice}</p>
                <p>Total shipping:${totalShipping}</p>
                <p>Tax:${tax.toFixed(2)}</p>
                <h6>Grand total:${grandTotal.toFixed(2)}</h6></div>
                
            
            
        
    );
};

export default Cart;