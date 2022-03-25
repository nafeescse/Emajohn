import React, { useEffect, useState } from 'react';
import './Shop.css'
import Cart from '../../components/Cart/Cart'
import Product from '../../components/Product/Product'
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        console.log('age');
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        console.log('pore');
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const qnty = storedCart[id];
                addedProduct.quantity = qnty;
                console.log(addedProduct);
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart)
    },[products])
    const handleAddTCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    } 
    return (
        <div className='shop'>
            <div className="products-container">
                {
                    products.map(product  => <Product key={product.id} product={product}
                    handleAddTCart = {handleAddTCart}>
                    </Product>
                    )
                }
            </div>
            <div className="shop-cart"><Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;