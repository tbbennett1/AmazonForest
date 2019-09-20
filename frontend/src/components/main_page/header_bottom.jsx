import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import AccountDropdownContainer from './account_dropdown_container';

import Cart from '../../assets/images/cart.png';
import Location from '../../assets/images/location.png';

class HeaderBottom extends React.Component{
    constructor(props) {
        super(props);
        this.state = { accountDropdown: false }

        this.toggleAccountDropdown = this.toggleAccountDropdown.bind(this);
        this.handleSignedIn = this.handleSignedIn.bind(this)
    }

    componentDidMount() {
        const body = document.getElementsByTagName("body")[0];
        body.addEventListener("click", (event) => {
            if(this.state.accountDropdown) {
                if(!Array.from(event.target.classList).includes("accountDropdown") &&
                !Array.from(event.target.classList).includes("form-orange-button")) {
                    if(this.state.accountDropdown) {

                        let screen = document.getElementById("smoke-screen")
                        if (screen) screen.classList.remove("active")
                        this.setState({accountDropdown: false})
                    }
                }
            }
        })
    }

    toggleAccountDropdown() {
        if(!this.state.accountDropdown) {
            let screen = document.getElementById("smoke-screen")
            screen.classList.add("active")
            this.setState({
                accountDropdown: !this.state.accountDropdown
            })
        }
    }

    handleSignedIn() {
        if (this.props.currentUser.name) {
            return (<div className="header" onClick={this.toggleAccountDropdown}>
                        <span className="headerAccountOne">Hello, {this.props.currentUser.name}</span>
                        <span className="headerAccountTwo">Accounts & Lists</span>
                        <section className="headerTriangle"></section>
                        { this.state.accountDropdown && <AccountDropdownContainer currentUser={this.props.currentUser} />}
                    </div>)
        } else {
            return (
                <div className="header" onClick={this.toggleAccountDropdown}>
                    <span className="headerAccountOne">Hello, Sign in</span>
                    <span className="headerAccountTwo">Accounts & Lists</span>
                    <section className="headerTriangle"></section>
                    {/* <div><Link to="/signup">Sign Up</Link></div> */}
                    { this.state.accountDropdown && <AccountDropdownContainer />}
                </div>)
        }
    }
    
    render(){
        return(
            <div className="headerBottom">
                <div className="headerAddress">
                    <button>
                        <img src={Location} alt="user location"/>
                        <div>
                            <div>Deliver to</div>
                            <div>My address, yo</div>
                        </div>
                    </button>
                </div>
                <section className="navbarButtons">
                    <div><Link to="/items">Today's Deals</Link></div>
                    <div>Your Amazon Forest</div>
                    <div>Sell Your Pets</div>
                </section>
                <div className="headerBottomRight">
                    
                    {this.handleSignedIn()}
                    <div className="headerCartContainer">
                        <img className="headerCartImage" src={Cart} alt="cart"/>
                        <span className="headerItemsInCart">0</span>
                        <span>Cart</span>
                    </div>
                </div>
            </div>
        )
    }


}

export default withRouter(HeaderBottom)
