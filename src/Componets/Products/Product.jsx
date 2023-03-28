import React from 'react';
import './Product.css'
const Product = (props) => {
   
    const {img,name,seller,price,quantity,ratings
    }=props.product
    return (
        <div className='product'>
           <img src={img} alt="" />
       <div className='product-info'>
           <h4 className='name'>{name}</h4>
           <p>Price:${price}</p>
           <p>Manufacturer :{seller}</p>
           <p>Ratting:{ratings}</p>
       </div>
       <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;