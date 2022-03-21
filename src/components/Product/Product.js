import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.product);
    const {name, img, seller, price, ratings} = props.product;
    return (
        <div className='cards'>
            <img src={img} alt="" />
            <h5> {name}</h5>
            <p>Price: ${price}</p>
            <small>Manufacturer: {seller}</small>
            <small>Ratimg: {ratings} star</small>
            <div><p>Add to Cart  </p></div>
        </div>
    );
};

export default Product;