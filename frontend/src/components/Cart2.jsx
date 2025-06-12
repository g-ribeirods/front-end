import React, { Component } from 'react'

export default class Cart2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            products:[
                {id:1, product_name: "product 1", price:100.0, quantity:3},
                {id:2, product_name: "product 2", price:10.50, quantity:2},
                {id:3, product_name: "product 3", price:8.0, quantity:30}
            ]
        }
    }

render() {
    return (
        <div className='products'>
            <div className='product'>
                <div className='product_details'>
                    <h3>Product</h3>
                    <p>bala bla vlava fassfsa gdsdgfs asdasda</p>
                    <h3>$25</h3>
                </div>
                <div className='product_quantity-container'>
                    <button>+</button>
                    <p>2</p>
                    <button>-</button>
                </div>
            </div>
        </div>
    )
  }
}
