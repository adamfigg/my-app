import React, { Component } from 'react';
import axios from 'axios';
// import Paintings from './paintings';

import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      paintings: [],
      currentUser: {}
    }
  }

  componentDidMount() {
    axios.get(`/api/get-paintings`)
      .then(response => {
        this.setState({
          paintings: response.data
        })
      })
      
          //this is when the user gets pushed back to the home page (created with Liz and Ashlynn)
    axios.get('/auth/me')
    .then( response => {
      this.setState({
        currentUser: response.data
      })
    })
      
  }


    addToCart (paintingId) {
axios.post(`/api/addToCart/${paintingId}`)
    }


  render() {
    const Paintings = this.state.paintings
      .map((data, i) => {
        return (
          <div className='painting-display-style' key={i}>
            <h1>{data.title}</h1>
            <img className='painting-styles' src={data.imageurl} />
            <h3 className='size-and-price'>size: {data.size}  price: ${data.price}</h3>
            <button className='add-to-cart' onClick= {()=>{this.addToCart(data.id)}}>Add to shopping cart</button>
            <br />
          </div>
        )

      })
    return (
      <div className="App">
        <div className="welcome-text">
          <style>@import url('https://fonts.googleapis.com/css?family=Yellowtail');</style>
          <style>@import url('https://fonts.googleapis.com/css?family=Quicksand');</style>
          <p>Carlsbad Cottage Art Boutique</p>
        </div>
        {Paintings}
      </div>
    );
  }
}


export default Home;