import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import axios from 'axios';

class Navbar extends Component {

constructor(props) {
    super(props);

        this.state = {
            // loggedInUser: {}
            user: ''
        }
}

componentDidMount() {
    axios.get('/auth/me')
    .then( res => {
        console.log(res.data)
        if(res.data.displayName)
        this.setState({
            user: res.data.name["givenName"]
        })
    })
}



    render() {

        const login_btn=( <a href= 'http://localhost:4000/auth'><button>Log In</button></a>)

        const logout_btn=( <a href= 'http://localhost:4000/logout'><button>Want to log out {this.state.user}?</button></a>)

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
                    {/*<div className="login-button">*/}
                    {this.state.user===''?login_btn:logout_btn}
                    {/*</div>*/}
            </div>
        );
    }
}

export default Navbar;