import React from 'react';
import ItemIndexItem from '../item_page/item_index_item';


class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchTerm: "",
            pets: false,
            accessories: false,
            food: false,
            toys: false,
            items: "",
            filtered: ""
        }
        this.handleSearchQuery = this.handleSearchQuery.bind(this)
        this.toggleFilter = this.toggleFilter.bind(this)
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

            const petsbox = document.getElementById("pets")
            if (petsbox) {
                petsbox.checked = false
            }

            const foodbox = document.getElementById("food")
            if (foodbox) {
                foodbox.checked = false
            }

            const accessoriesbox = document.getElementById("accessories")
            if (accessoriesbox) {
                accessoriesbox.checked = false
            }

            const toysbox = document.getElementById("toys")
            if (toysbox) {
                toysbox.checked = false
            }
        }

        if (prevState.searchTerm != this.state.searchTerm) {
            this.renderSearchResults()
        }
        
        if (!this.state.filtered){
        this.renderSearchResults()
        }

    }

    componentDidMount(){
        this.handleSearchQuery()
    }

    toggleFilter(value, key) {
        this.setState({ [key]: value.target.checked })
        if (key) {
            this.filterPets(key)
        } else {
            this.setState({ filtered: this.state.items })
        }
    }

    filterPets(key) {
        let category
        if (key === "pets") category = "category1"
        if (key === "accessories") category = "accessories"
        if (key === "food") category = "category5"
        if (key === "toys") category = key
        let filtered = this.state.items.filter(item => item.category == category)
        this.setState({ filtered: filtered })
    }

    renderSearchResults(){
        const { items } = this.props
        let itemLists, filtered, searchTermSplit

        if (this.state.searchTerm) searchTermSplit = this.state.searchTerm.split(" ").map( term => term.toLowerCase())
        if (items && items[0] && searchTermSplit) {
            filtered = items[0].filter(item => {
                return searchTermSplit.every(word => {
                    return item.title.toLowerCase().match(word) || item.description.toLowerCase().match(word)
                 })
            })
            if (filtered) {
                this.setState({ items: filtered,
                filtered:filtered })
            }
            itemLists = filtered.map(item => <ItemIndexItem key={item._id} item={item} />)
        }

    }

    renderFilteredResults(){
        if (this.state.filtered && this.state.filtered.length > 0 && this.props.reviews) {

        return this.state.filtered.map(item => {
            let filteredReviews

            filteredReviews = this.props.reviews.filter(review => review.itemId === item._id)
        
            return <ItemIndexItem key={item._id} item={item} filteredReviews={filteredReviews}/>})
        }
    }

    render(){
        return(
            <div className="item-index">
                <div className="item-lists">
                    <div className="item-list-filter">
                        <div className="item-list-filter-wrapper">
                            <h2>Category</h2>
                            <label className="container">Accessories<input name="radio" id="accessories" type="radio" value="accessories" onChange={value => this.toggleFilter(value, "accessories")} /><span className="checkmark" /></label>
                            <label className="container">Food<input name="radio" id="food" type="radio" value="food" onChange={value => this.toggleFilter(value, "food")} /><span className="checkmark" /></label>
                            <label className="container">Pets<input name="radio" id="pets" type="radio" value="pets" onChange={value => this.toggleFilter(value, "pets")} /><span className="checkmark" /></label>
                            <label className="container">Toys<input name="radio" id="toys" type="radio" value="toys" onChange={value => this.toggleFilter(value, "toys")} /><span className="checkmark" /></label>
                            <label className="container">All<input name="radio" id="special-box" type="radio" value="accessories" onChange={value => this.toggleFilter(value)} /><span className="checkmark" /></label>
                        </div>
                    </div>
                    <ul>
                        {this.renderFilteredResults()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Search