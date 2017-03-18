import {Meteor} from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'
import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Signup from '../imports/ui/Signup'
import Login from '../imports/ui/Login'
import Card from '../imports/ui/Card'
import NotFound from '../imports/ui/NotFound'
import Home from '../imports/ui/Home'


const history = createBrowserHistory()
const routes = (
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/card/:userName" component={Card}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
)

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId()
    console.log("isAuthenticated", isAuthenticated)

})

Meteor.startup(() => {
    $('html').attr('dir', 'rtl')
    $('html').attr('lang', 'he')
    $(document).foundation();
    ReactDOM.render(routes, document.getElementById('app'))
})
