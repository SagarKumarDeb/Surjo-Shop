import React, { useEffect, useState,} from 'react';
import './Shop.css';
import Product from './../Product/Product';
import Cart from './../Cart/Cart';
import { addToDb, getShoppingCart,} from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect( (() => { 
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
     .then(res=>res.json()
     ).then(data=>setProducts(data))}),[]);

     useEffect( () => {const storedCart = getShoppingCart();
        const savedCart = []; 
        for (const id in storedCart)
        {const addedProduct = products.find(product => product.id === id)
            if (addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);}

            }  setCart(savedCart)},  [products]);

     const handleAddToCart = (product) => { 
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb (product.id);
     };
    
     return (
        <div className='Shop-container'>
            <div className='Products-container'>{products.map (product=><Product 
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}

            
            ></Product>)}</div>
            
            <div>< Cart cart={cart}></Cart></div>
            
            
            
        </div>
    );
    };

export default Shop;