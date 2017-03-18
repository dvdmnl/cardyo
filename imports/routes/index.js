import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import Signup from '../ui/Signup'
import Login from '../ui/Login'
import Card from '../ui/Card'
import NotFound from '../ui/NotFound'
import Home from '../ui/Home'


import createBrowserHistory from 'history/createBrowserHistory'


const history = createBrowserHistory()

export const routes = (
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/card" component={Card}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
)