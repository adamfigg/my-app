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
    axios.get(`http://localhost:4000/`)
      .then(response => {
        this.setState({
          paintings: response.data
        })
      })
      
          //this is when the user gets pushed back to the home page (created with Liz and Ashlynn)
    axios.get('http://localhost:4000/auth/me')
    .then( response => {
      this.setState({
        currentUser: response.data
      })
    })
      
  }



  render() {
    const Paintings = this.state.paintings
      .map((data, i) => {
        return (
          <div className='painting-display'>
            <h1>{data.title}</h1>
            <img className='painting-styles' src={data.imageurl} />
            <h3>size: {data.size}</h3>
            <h3>price: ${data.price}</h3>
            <button>Add to shopping cart</button>
            <br />
          </div>
        )

      })
    return (
      <div className="App">
        <div className="App-header">
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