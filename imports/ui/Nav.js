import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'
import {Meteor} from 'meteor/meteor'

class Nav extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            isAuthenticated:false
        }
    }


    componentDidMount (){
        this.setState({
            isAuthenticated:!!Meteor.userId()
        })
    }
    render() {
        return(
            <div>

                {/*

                 <div className="top-bar">
                 <div className="top-bar-title">
                 <span data-responsive-toggle="responsive-menu" data-hide-for="medium">
                 <button className="menu-icon dark" type="button" data-toggle="responsive-menu"/>
                 </span>
                 <strong>Site Title</strong>
                 </div>
                 <div id="responsive-menu">
                 <div className="top-bar-left">
                 <ul className="dropdown menu" data-dropdown-menu>
                 <li>
                 <a href="#">One</a>
                 <ul className="menu vertical">
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/login">Login</Link></li>
                 <li><Link to="/signup">Signup</Link></li>
                 <li><Link to="/card">Card</Link></li>
                 </ul>
                 </li>
                 <li><Logout/></li>
                 <li><a href="#">Three</a></li>
                 </ul>
                 </div>
                 <div className="top-bar-right">
                 <ul className="menu">
                 <li><input type="search" placeholder="Search"/></li>
                 <li><button type="button" className="button">Search</button></li>
                 </ul>
                 </div>
                 </div>
                 </div>

                */}

                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="menu-text">Yeti Agency</li>
                            {this.state.isAuthenticated && <li>{<Logout/>}</li>}
                            <li><a href="#">Two</a></li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Signup</Link></li>
                            <li><Link to="/card">Card</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default Nav
