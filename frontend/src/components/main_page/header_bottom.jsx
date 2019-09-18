import React from 'react';
import { Link } from 'react-router-dom';

import Cart from '../../assets/images/cart.png';
import Location from '../../assets/images/location.png';

class HeaderBottom extends React.Component{
    constructor(props) {
        super(props)
        this.handleSignedIn = this.handleSignedIn.bind(this)
    }

    handleSignedIn() {
        if (this.props.currentUser.name) {
            return (<nav className="header">
                        <div><Link to="/">
                            <span>Hello, {this.props.currentUser.name}</span>
                        </Link></div>
                    </nav>)
        } else {
            return (
                <nav className="header">
                    <div><Link to="/login">
                        <span>Hello, Sign in</span>
                    </Link></div>
                    {/* <div><Link to="/signup">Sign Up</Link></div> */}
                </nav>)
        }
    }
    
    render(){
        return(
            <div className="headerBottom">
                <div className="headerAddress">
                    <button>
                        <img src={Location} />
                        <div>
                            <div>Deliver to</div>
                            <div>My address, yo</div>
                        </div>
                    </button>
                </div>
                <div>A bunch of buttons</div>
                <div className="headerBottomRight">
                    {this.handleSignedIn()}
                    <div className="headerCartContainer">
                        <img className="headerCartImage" src={Cart} />
                        <span className="headerItemsInCart">0</span>
                        <span>Cart</span>
                    </div>
                </div>
            </div>
        )
    }


}

export default HeaderBottom
