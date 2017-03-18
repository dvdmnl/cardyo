import React from 'react'
import { Link } from 'react-router-dom'
import { Accounts } from 'meteor/accounts-base'

class Signup extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            error:''
        }
    }

    onSubmit (e) {
        e.preventDefault()
        const email = this.refs.email.value.trim();
        const password = this.refs.password.value.trim();
        Accounts.createUser({
            email:email,
            password:password
        }, (err) => {
            console.log('Signup callback : ',err)
        })
    }

    render() {
        return (
            <div>
                <div className="row column text-center">
                    <h1>Join CardYo</h1>
                </div>
                <div className="row">
                    <div className="column small-centered small-10 medium-6 large-4">
                        <div className="callout callout-auth">
                            <form onSubmit={this.onSubmit.bind(this)}>
                                <input type="email" name="email" ref="email" placeholder="Enter Email"/>
                                <input type="password" name="password" ref="password" placeholder="Pick a password"/>
                                <button className="button expanded">Create Account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Signup