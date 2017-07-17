import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      paintingsList:[]
    }
    this.loadPaintings = this.loadPaintings.bind(this);
  }

  loadPaintings() {
    axios.get(THIS IS WHERE I NEED TO ADD THE LINK TO MY API!!!!).then(response => response.data).then(
      (result) => {
        this.setState({
          paintingsList: result,
        })
      }
    );
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Cozy Carlsbad Art Gallery</h2>
        </div>
        <p className="App-intro">
         "Life is a blank canvas...paint it with all the colors of memories to be made and to be remembered."
        </p>

        <button hidden={this.state.paintingsList.length > 0} onClick={this.loadPaintings} >Click to see our gallery</button>


        <ul>
          {this.state.paintingsList.map(function (painting, i) {
            return <li> Here is our {painting.name} which was painted with {medium} and costs ${painting.price}</li>
          })}

          </ul>
      </div>
    );
  }
}

export default App;
