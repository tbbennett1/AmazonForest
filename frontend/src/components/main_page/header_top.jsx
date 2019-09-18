import React from 'react';
import SearchLogo from '../../assets/images/search_icon.svg';
import Bars from '../../assets/images/bars.png';
import WhiteLogo from '../../assets/images/forest_icon_white.png';

class HeaderTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ""};
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        })
    }

    render() {
        return(
            <div className="headerTop">
                <img className="headerBars" src={Bars} />
                <img className="headerLogo" src={WhiteLogo} />
                <div className="searchBar">
                    <button>All<div></div></button>
                    <input type="text" onChange={this.update("text")} />
                    <img src={SearchLogo}/>
                </div>
                <span>All your greatest deals on exotic pets here!</span>
            </div>
        )
    }
}

export default HeaderTop;