import React, { Component } from 'react';
import axios from 'axios';
import './ShoppingCart.css';

class ShoppingCart extends Component {

    constructor() {
        super();
        this.state = {
            cart: [],
            currentUser: {},
            total: ''
        }
    }
    componentDidMount() {
        axios.get(`/api/getCart`)
            .then(response => {
                    this.setState({
                        cart: response.data,
                    })
                axios.get('/api/getSum')
                .then(res => {
                    this.setState({
                        total: res.data[0].sum
                    })
                })
            })
    }

    removeFromCart(cartId) {
        axios.delete(`/api/removeFromCart/${cartId}`)
        .then(()=>{
             axios.get(`/api/getCart`)
            .then(response => {
                this.setState({
                    cart: response.data
                })
                 axios.get('/api/getSum')
                .then(res => {
                    this.setState({
                        total: res.data[0].sum
                    })
                })
            })
        })
    }

    render() {
        const ShoppingCart = this.state.cart
            .map((cart, i) => {
                return (
                    <div className='painting-display' key={i}>
                        <h1>{cart.title}</h1>
                        <img className='painting-styles' src={cart.imageurl} />
                        <h3>size: {cart.size}</h3>
                        <h3>price: ${cart.price}</h3>
                        <button onClick={() => { this.removeFromCart(cart.cart_id) }}>Remove from cart</button>
                        <br />
                    </div>
                )

            })
        return (
            <div>
                Your shopping cart total is: ${this.state.total}
                {ShoppingCart}
            </div>
        );
    }
}

export default ShoppingCart;