import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className='logoContainer'>
              <Link to='/'>
                <img  src={require("./gallery.png")}/>
              </Link> 
               <Link to='/shopping-cart'>
               <img  src={require("./shopping-cart.png")}/>
               </Link> 
               <Link to='/about'>
               <img  src={require("./hello-speech-bubble.png")}/>
               </Link> 
            </div>
        );
    }
}

export default Navbar;