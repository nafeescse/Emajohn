import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../../components/Product/Product'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop'>
            <div className="products-container">
                {
                    products.map(product  => <Product key={product.id} product={product}>
                        
                    </Product>
                    )
                }
            </div>
            <div className="">Right</div>
        </div>
    );
};

export default Shop;