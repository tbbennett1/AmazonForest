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
        this.handleSearchButton = this.handleSearchButton.bind(this)
    }
    
    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        })
    }
    
    componentDidMount(){
        this.suggestionsElement = document.getElementById("search-suggestions")
        const body = document.getElementsByTagName("body")[0];
        body.addEventListener("click", (event) => {
            this.suggestionsElement.classList.remove("active")
        })
    }

    onInputChange(e){
        this.suggestionsElement.classList.add("active")
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

    handleSearchButton(){
        this.setState({
            currentlyDisplayed: []
        })
        this.props.history.push({
            pathname: '/search',
            state: { searchTerm: this.state.searchTerm },
            search: `?=${this.state.searchTerm}`
        })
    }

    render() {
        return(
            <div className="headerTop">
                <img className="headerBars" src={Bars} />
                <Link to={"/"}><img className="headerLogo" src={WhiteLogo} /></Link>
                <div className="searchBar">
                    <button>All<div></div></button>
                    <div className="search-box">
                        <form onSubmit={this.handleSearchButton}><input type="text" onChange={this.onInputChange} value={this.state.searchTerm}/></form>
                        <div className="search-suggestions" id="search-suggestions">
                            {this.renderSuggestions()}
                        </div>
                    </div>
                    <img onClick={this.handleSearchButton} src={SearchLogo}/>
                </div>
                <span>All your greatest deals on exotic pets here!</span>
            </div>
        )
    }
}

export default withRouter(HeaderTop);