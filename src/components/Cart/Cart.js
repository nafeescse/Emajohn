import React from 'react';
import "./Cart.css"


const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    let shipping = 0;
    let tax = 0;
    let grandTotal = 0;

    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
        tax = parseInt((total * 0.1));
        grandTotal = total + shipping + tax;
    }


    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <strong>Grand Total: ${grandTotal}</strong>
        </div>
    );
};

export default Cart;