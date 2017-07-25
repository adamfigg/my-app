import React, { Component } from 'react';
import axios from 'axios';
import './ShoppingCart.css';

class ShoppingCart extends Component {

    constructor() {
        super();
        this.state = {
            cart: [],
            currentUser: {}
        }
    }
    componentDidMount() {
        axios.get(`/api/getCart`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    cart: response.data
                })
            })
    }


    removeFromCart(cartId) {
        axios.delete(`/api/removeFromCart/${cartId}`)
        .then(()=>{
             axios.get(`/api/getCart`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    cart: response.data
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
                {ShoppingCart}
            </div>
        );
    }
}

export default ShoppingCart;