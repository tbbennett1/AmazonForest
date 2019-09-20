import React from 'react';
import ItemIndexItem from '../item_page/item_index_item';

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchTerm: ""
        }
        this.handleSearchQuery = this.handleSearchQuery.bind(this)
    }


    handleSearchQuery(){
        if (this.props.history.location.state) {
            return this.setState({
                searchTerm: this.props.history.location.state.searchTerm
            })
        }

        if (this.props.history.location.search) {
            let match,
                pl = /\+/g,  // Regex for replacing addition symbol with a space
                search = /([^&=]+)=?([^&]*)/g,
                decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
                query = this.props.history.location.search.slice(2)
            let urlParams= {};
            while (match = search.exec(query))
                urlParams[decode(match[1])] = decode(match[2]);
            let fixedTerm = Object.keys(urlParams)[0]
            return this.setState({
                searchTerm: fixedTerm
            })
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.location.search != this.props.history.location.search){
            this.handleSearchQuery()
        }
    }

    componentDidMount(){
        this.handleSearchQuery()
    }

    renderSearchResults(){
        const { items } = this.props
        let itemLists, filtered, searchTermSplit

        if (this.state.searchTerm) searchTermSplit = this.state.searchTerm.split(" ").map( term => term.toLowerCase())
        if (items && items[0] && searchTermSplit) {
            filtered = items[0].filter(item => {
                return searchTermSplit.some(word => {
                    return item.title.toLowerCase().match(word) || item.description.toLowerCase().match(word)
                 })
            })
            itemLists = filtered.map(item => <ItemIndexItem key={item._id} item={item} />)
        }

        return itemLists
    }

    render(){
        return(
            <div className="item-index">
                <div className="item-lists">
                    <ul>
                        {this.renderSearchResults()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Search