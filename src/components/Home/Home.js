import React, { Component } from 'react';
import axios from 'axios';

import './Home.css';

class Home extends Component {
    constructor() {
    super();
    this.state = {
      paintingsList:[]
    }
    // this.loadPaintings = this.loadPaintings.bind(this);
  }

  // loadPaintings() {
  //   axios.get(THIS IS WHERE I NEED TO ADD THE LINK TO MY API!!!!).then(response => response.data).then(
  //     (result) => {
  //       this.setState({
  //         paintingsList: result,
  //       })
  //     }
  //   );
  // }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Carlsbad Cottage Art Gallery</h2>
        </div>
        <p className="App-intro">
         THIS IS WHERE THE GALLERY WILL START.
        </p>

        {/*<button hidden={this.state.paintingsList.length > 0} onClick={this.loadPaintings} >Click to see our gallery</button>


        <ul>
          {this.state.paintingsList.map(function (painting, i) {
            return <li> Here is our {painting.name} which was painted with {medium} and costs ${painting.price}</li>
          })}

          </ul>*/}
      </div>
    );
  }
}

export default Home;