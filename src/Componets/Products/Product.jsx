import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // button handel
    const handelAddToCart=props.handelAddToCart
   
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
       <button onClick={()=>handelAddToCart(props.product)} className='btn-cart'>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;