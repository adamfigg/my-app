import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './Shared/Navbar';

import routes from '../routes.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {routes}
      </div>
    )
  }
  
}

export default App;
