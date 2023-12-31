import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch ('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
    const products = await loadedProducts.json();  



    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart){
        const addedProduct = products.find(products => products.id === id);
        if(addedProduct){const quantity = storedCart[id];
            addedProduct.quantity = quantity;}
            savedCart.push(addedProduct);
    } 
    return savedCart;

}
    
  

export default cartProductsLoader;

