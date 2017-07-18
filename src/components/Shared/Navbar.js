import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
              <Link to='/'>
                <img classname="home" src={require("./home.png")}/>
              </Link> 
               <Link to='/shopping-cart'>
               <img classname="shopping-cart" src={require("./online-store.png")}/>
               </Link> 
               <Link to='/about'>
               <img classname="about" src={require("./hello-speech-bubble.png")}/>
               </Link> 
            </div>
        );
    }
}

export default Navbar;