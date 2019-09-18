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
            return (<div><nav className="header">
                            <span className="headerAccountOne">Hello, {this.props.currentUser.name}</span>
                            <span className="headerAccountTwo">Accounts & Lists</span>
                    </nav></div>)
        } else {
            return (
                <div><nav className="header">
                        <span className="headerAccountOne">Hello, Sign in</span>
                        <span className="headerAccountTwo">Accounts & Lists</span>
                    {/* <div><Link to="/signup">Sign Up</Link></div> */}
                </nav></div>)
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
