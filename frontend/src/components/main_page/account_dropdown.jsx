import React from 'react';
import {Link} from 'react-router-dom';

class AccountDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        debugger;
        this.props.logout();
    }

    handleDropdown() {
        if(!this.props.currentUser) {
            return(
                <div>
                    <Link to={"/login"}>
                        <button className="form-orange-button">   
                            Sign in
                        </button>
                    </Link>
                    <p>New customer? <Link to={"/signup"}>Start here.</Link></p>
                </div>
            )
        } else {
            return(
                <Link to={"/login"}>
                    <button className="form-orange-button" onClick={this.handleClick}>   
                            Sign Out
                    </button>
                </Link>
            )
        }
    }

    render() {
        return(
            <section className="accountDropdown">
                <section className="dropdownTriangle"></section>
                {this.handleDropdown()}
            </section>
        )
    }
}

export default AccountDropdown;