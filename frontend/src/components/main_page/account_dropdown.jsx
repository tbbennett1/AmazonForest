import React from 'react';
import {Link} from 'react-router-dom';

class AccountDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
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
                <div className="ad-div">
                  <Link to={`/users/${this.props.currentUser.id}`}>Your Amazon Forest</Link>
                  <Link to={"/login"}>
                      <button className="form-orange-button" onClick={this.handleClick}>   
                              Sign Out
                      </button>
                  </Link>
                </div>
            )
        }
    }

    render() {
        return(
            <section className="accountDropdown" id="accountDropdown">
                
                <section className="dropdownTriangle"></section>
                {this.handleDropdown()}

            </section>
        )
    }
}

export default AccountDropdown;