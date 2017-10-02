/**
 * Created by lihao on 2017/10/2.
 */
import React, {Component} from 'react';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';

import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';
import HomePage from './HomePage';

class RootRoute extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <IndexRedirect to="/"/>
                <Route path={'/'} components={Welcome}/>
                <Route path={'/login'} components={Login}/>
                <Route path={'/register'} components={Register}/>
                <Route path={'/home'} components={HomePage}/>
            </Router>
        )
    }
}

export default RootRoute;