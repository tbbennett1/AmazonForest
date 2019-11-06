import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class AccountDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleGuest = this.handleGuest.bind(this);
    }

    handleClick() {
        this.props.logout();
    }

    handleGuest(e) {
        e.preventDefault();
        const user = {
            email: "jeff@bezos.com",
            password: "password",
        }
        this.props.login(user);
    }

    handleDropdown() {
        if(!this.props.currentUser) {
            return(
                <div className="accountDropdownWrapper">
                    <div className="form-orange-button demo">
                        <input type="button" value="Demo Login" onClick={this.handleGuest} />
                    </div>
                    <div className="form-orange-button demo">
                        <input type="button" value="Sign In" onClick={() => this.props.history.push("/login")} />
                    </div>
                    <p>New customer? <Link to={"/signup"}>Start here.</Link></p>
                </div>
            )
        } else {
            return(
                <div>
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

export default withRouter(AccountDropdown);