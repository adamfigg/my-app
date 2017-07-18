import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Components
import Home from './components/Home/Home';
import About from './components/About/About';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/shoppingcart' component={ShoppingCart} />
    </Switch>
)