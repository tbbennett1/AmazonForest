import React from 'react';
import SearchLogo from '../../assets/images/search_icon.svg'

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
                <h2>amazon forest</h2>
                <div className="searchBar">
                    <button>All</button>
                    <input type="text" onChange={this.update("text")} />
                    <img src={SearchLogo}/>
                </div>
                <span>All your greatest deals on exotic pets here!</span>
            </div>
        )
    }
}

export default HeaderTop;