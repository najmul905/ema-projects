import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    // button handel usState
    const [cart, setCart]=useState([]);

// button handel
    const handelAddToCart=(product)=>{
       const newCart=[...cart,product]
       setCart(newCart)

    }

    return (
        <div className='Shop-container'>
            <div className='products-container'>
{
    products.map(product=> <Product 
        key={product.id}
        product={product}
        handelAddToCart={handelAddToCart}
    
    ></Product>)
}
            </div>
            <div>
<Cart 
cart={cart}

>

</Cart>
            </div>
            
        </div>
    );
};

export default Shop;