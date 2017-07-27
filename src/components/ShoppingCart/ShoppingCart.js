import React, { Component } from 'react';
import axios from 'axios';
import './ShoppingCart.css';
import stripe from './stripeKey';
import StripeCheckout from 'react-stripe-checkout';

class ShoppingCart extends Component {

    constructor() {
        super();
        this.state = {
            cart: [],
            currentUser: {},
            total: ''
        }


    }
        //More stripe copy and paste for token
    onToken = (token) => {
        token.card = void 0;
        console.log('token', token);
        axios.post('http://localhost:4000/api/payment', { token, amount: this.state.total*100 }).then(response => {
            alert('Thanks so much for support your local artists!')
        });
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
            .then(() => {
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
        const StripePayment = (<StripeCheckout
            token={this.onToken}
            stripeKey={stripe.pub_key}
            amount={this.state.total*100} 
            currency="USD"/>);

        const ShoppingCart = this.state.cart
            .map((cart, i) => {
                return (
                    <div className='painting-display' key={i}>
                        <h1>{cart.title}</h1>
                        <img className='painting-styles' src={cart.imageurl} />
                        <h3 className='size-and-price'>size: {cart.size} price: ${cart.price}</h3>
                        <button onClick={() => { this.removeFromCart(cart.cart_id) }}>Remove from cart</button>
                        <br />
                    </div>
                )

            })
        return (
            <div>    
                <div className='big-box'>
                    <div className='fixed-total'> 
                        <div className='total-due'>
                        Your shopping cart total is: ${this.state.total}
                        </div>
                        <div className='pay-button'>
                            {StripePayment}
                        </div>
                    </div>        
            </div>
            <div className="App">
                <div>
                    <style>@import url('https://fonts.googleapis.com/css?family=Yellowtail');</style>
                    <style>@import url('https://fonts.googleapis.com/css?family=Quicksand');</style>
                    {ShoppingCart}
                </div>
            </div>
            </div>
        );
    }
}

export default ShoppingCart;