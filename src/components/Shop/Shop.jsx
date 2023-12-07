import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from './../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect( (() => { 
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
     .then(res=>res.json()
     ).then(data=>setProducts(data))}),[]);

     const handleAddToCart = (product) => { 
        const newCart = [...cart, product];
        setCart(newCart);
     };
    
     return (
        <div className='Shop-container'>
            <div className='Products-container'>{products.map (product=><Product 
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}

            
            ></Product>)}</div>
            
            < Cart cart={cart}></Cart>
            
            
            
        </div>
    );
    };

export default Shop;