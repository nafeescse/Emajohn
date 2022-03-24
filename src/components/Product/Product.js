import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props.product);
    const {handleAddTCart, product} = props;
    const {name, img, seller, price, ratings} = product;
    return (
        <div className='cards'>
            <img src={img} alt="" />
            <h5 className='card-name'> {name}</h5>
            <p className='card-price'>Price: ${price}</p>
            <small>Manufacturer: {seller}</small>
            <small>Ratimg: {ratings} star</small>
            <div className='btn-cart'><button onClick={() => handleAddTCart(product)} >Add to cart <FontAwesomeIcon icon= {faCoffee}></FontAwesomeIcon> </button></div>
        </div>
    );
};

export default Product;