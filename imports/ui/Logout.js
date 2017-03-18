import React from 'react'
import { Accounts } from 'meteor/accounts-base'


class Logout extends React.Component {
    onLogout () {
        Accounts.logout()
    }

    render() {
        return(
            <div>
                <a onClick={this.onLogout.bind(this)}>Logout</a>
            </div>
        )
    }
}

export default Logout