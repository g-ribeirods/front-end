import React, { useState } from 'react'
import './Cart.css';

const Cart4 = () => {

    const [products, setProducts] = useState([
        //Usando useState hook em vez de state
            {id:1, product_name: "product 1", price:100.0, quantity:3},
            {id:2, product_name: "product 2", price:10.50, quantity:2},
            {id:3, product_name: "product 3", price:8.0, quantity:30}
    ]);

    const incrementQuantity = (id) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === id && product.quantity >= 0 ? {...product, quantity:
                    product.quantity +1}: product
            )
        );
    };

    const decrementQuantity = (id) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === id && product.quantity > 0 ? {...product, quantity:
                    product.quantity -1}: product
            )
        );
    };

  return (
    <div className='products'>
        {products.map((product =>(
            <div className='product' key={product.id}>
                <div className='product_details'>
                    <h3>{product.product_name}</h3>
                    <p>bala bla vlava fassfsa gdsdgfs asdasda</p>
                    <h3>${product.price.toFixed(2)}</h3>
                </div>
                <div className='product_quantity-container'>    
                    <button onClick={() => incrementQuantity(product.id)}>+</button>
                    <p>{product.quantity}</p>
                    <button onClick={() => decrementQuantity(product.id)}>-</button>
                </div>
            </div>
        )))}
        </div>
  )
}

export default Cart4