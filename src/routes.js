import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Components
import Home from './components/Home/Home';
import About from './components/About/About';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
    </Switch>
)