import React from 'react';
import './Product.css'
const Product = (props) => {
   
    const {img,name,seller,price,quantity
    }=props.product
    return (
        <div className='product'>
           <img src={img} alt="" />
        </div>
    );
};

export default Product;