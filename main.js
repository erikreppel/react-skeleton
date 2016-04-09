`use strict`;
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import HelloWorld from './components/HelloWorld/HelloWorld.jsx';
import Counter from './components/Counter/Counter.jsx';


render((
    <Router>
        <Route path="/" component={HelloWorld}> 
            <Route path="counter" component={Counter}/>
        </Route>        
    </Router>
    ), document.getElementById('content'))