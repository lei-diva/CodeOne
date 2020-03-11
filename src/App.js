import React, { Component } from 'react';
import Playground from './pages/Playground/Playground';
import {Home} from './pages/Home/Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
    render () {
        return (

        <Router>
            <Switch>
            <Route exact path='/playground' component={Playground} />
            <Route exact path='/' component={Home} />
            </Switch>
        </Router>

        );
    }
}

export default App;