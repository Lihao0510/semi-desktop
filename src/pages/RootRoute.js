/**
 * Created by lihao on 2017/10/2.
 */
import React, {Component} from 'react';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';

import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';
import HomePage from './HomePage';

import OverView from './OverView';
import JobManage from './JobManage';
import Market from './Market';
import Message from './Message';
import Interview from './Interview';
import News from './News';
import Setting from './Setting';

class RootRoute extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <IndexRedirect to="/"/>
                <Route path={'/'} components={Welcome}/>
                <Route path={'login'} components={Login}/>
                <Route path={'register'} components={Register}/>
                <Route path={'home'} components={HomePage}>
                    <Route path={'overview'} component={OverView}/>
                    <Route path={'job'} component={JobManage}/>
                    <Route path={'market'} component={Market}/>
                    <Route path={'message'} component={Message}/>
                    <Route path={'interview'} component={Interview}/>
                    <Route path={'news'} component={News}/>
                    <Route path={'setting'} component={Setting}/>
                </Route>
            </Router>
        )
    }
}

export default RootRoute;