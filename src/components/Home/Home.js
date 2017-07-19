import React, { Component } from 'react';
import axios from 'axios';
// import Paintings from './paintings';

import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      paintings: []
    }
  }

  componentDidMount() {
    const results = axios.get(`http://localhost:4000/`)
      .then(res => res.data)
      .then((finalResult) => {
        this.setState({
          paintings: finalResult
        });
        console.log(this.state)
      });
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