import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import AccountDropdownContainer from './account_dropdown_container';

import Cart from '../../assets/images/cart.png';
import Location from '../../assets/images/location.png';
import { fetchCartItems } from '../../util/cart_item_api_util';

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
            let screen = document.getElementById("smoke-screen")
            if (screen) screen.classList.remove("active")
            let accountDropdown = document.getElementById("accountDropdown")
            if (accountDropdown) accountDropdown.classList.remove("active")
        })
    }

    toggleAccountDropdown() {
        let screen = document.getElementById("smoke-screen")
        if (screen) screen.classList.add("active")
        let accountDropdown = document.getElementById("accountDropdown")
        if (accountDropdown) accountDropdown.classList.add("active")
    }

    handleSignedIn() {
        if (this.props.currentUser && this.props.currentUser.name) {
            return (<div className="header" onClick={this.toggleAccountDropdown}>
                        <span className="headerAccountOne">Hello, {this.props.currentUser.name}</span>
                        <span className="headerAccountTwo">Accounts & Lists</span>
                        <section className="headerTriangle"></section>
                        <AccountDropdownContainer currentUser={this.props.currentUser} />
                    </div>)
        } else {
            return (
                <div className="header" onClick={this.toggleAccountDropdown}>
                    <span className="headerAccountOne">Hello, Sign in</span>
                    <span className="headerAccountTwo">Accounts & Lists</span>
                    <section className="headerTriangle"></section>
                    {/* <div><Link to="/signup">Sign Up</Link></div> */}
                    <AccountDropdownContainer />
                </div>)
        }
    }
    
    render(){
		// debugger
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
                    <div><Link to="/new_item">Sell Your Pet/Product</Link></div>
                </section>
                <div className="headerBottomRight">
                    
                    {this.handleSignedIn()}
                    <Link to="/cart" className="headerCartContainer">
                        <img className="headerCartImage" src={Cart} alt="cart"/>
                        <span className="headerItemsInCart">0{fetchCartItems.length}</span>
                        <span>Cart</span>
                    </Link>
                </div>
            </div>
        )
    }


}

export default withRouter(HeaderBottom)
