import React from 'react';
import {Link, withRouter } from 'react-router-dom';

import SearchLogo from '../../assets/images/search_icon.svg';
import Bars from '../../assets/images/bars.png';
import WhiteLogo from '../../assets/images/forest_icon_white.png';

class HeaderTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            currentlyDisplayed: []
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        })
    }

    onInputChange(e){
        let newDisplayed = this.props.items.filter(item => item.title.match(new RegExp( e.target.value, "i")))
        this.setState({
            searchTerm: e.target.value,
            currentlyDisplayed: newDisplayed
        })
    }

    handleClick(id){
        return e => {
            this.props.history.push(`/items/${id}`)
            this.setState({
                searchTerm: "",
                currentlyDisplayed: []
            })
        }
    }
    
    renderSuggestions(){
        let cut 
        if (this.state.currentlyDisplayed) cut = this.state.currentlyDisplayed
        .reverse().slice(-12).reverse()
        .map(item => <div key={item._id} className="search-suggestion" onClick={this.handleClick(item._id)}>{item.title}</div>)
        return cut
    }

    render() {
        return(
            <div className="headerTop">
                <img className="headerBars" src={Bars} alt="header bars" />
                <Link to={"/"}><img className="headerLogo" src={WhiteLogo} alt="header logo" /></Link>
                <div className="searchBar">
                    <button>All<div></div></button>
                    <div className="search-box">
                        <input type="text" onChange={this.onInputChange} value={this.state.searchTerm}/>
                        <div className="search-suggestions">
                            {this.renderSuggestions()}
                        </div>
                    </div>
                    <img src={SearchLogo} alt="search logo" />
                </div>
                <span>All your greatest deals on exotic pets here!</span>
            </div>
        )
    }
}

export default withRouter(HeaderTop);