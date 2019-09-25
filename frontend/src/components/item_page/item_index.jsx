import React from 'react';
import ItemIndexItem from './item_index_item';

class ItemIndex extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			pets: this.props.location.pets,
			accessories: this.props.location.accessories,
			food: this.props.location.food,
			toys: this.props.location.toys,
			items: this.props.items[0],
			filtered: this.props.items[0]
		}
		this.toggleFilter = this.toggleFilter.bind(this)
	}

	componentDidMount(){
		const petsbox = document.getElementById("pets")
		if (petsbox && this.props.location.pets) {
			petsbox.checked = this.props.location.pets
			this.filterPets("pets")
		}

		const foodbox = document.getElementById("food")
		if (foodbox && this.props.location.food) {
			foodbox.checked = this.props.location.food
			this.filterPets("food")
		}

		const accessoriesbox = document.getElementById("accessories")
		if (accessoriesbox && this.props.location.accessories) {
			accessoriesbox.checked = this.props.location.accessories
			this.filterPets("accessories")
		}

		const toysbox = document.getElementById("toys")
		if (toysbox && this.props.location.toys) {
			toysbox.checked = this.props.location.toys
			this.filterPets("toys")
		}
	}

	componentDidUpdate(prevProps, prevState){
		if (!this.state.items && this.props.items.length > 1){
			this.setState({items: this.props.items[0],
				filtered: this.props.items[0]})
		}
		
	}

	toggleFilter(value, key){
		this.setState({ [key]: value.target.checked })
		if (key) {
			this.filterPets(key)
		} else {
			this.setState({ filtered: this.props.items[0] })
		}
	}
	
	filterPets(key){
		let category 
		if (key === "pets") category = "category1"
		if (key === "accessories") category = key
		if (key === "food") category = "category5"
		if (key === "toys") category = key
		let filtered = this.state.items.filter(item => item.category == category)
		this.setState({ filtered: filtered})
	}
	
	render() {
		let itemLists
		if (this.state.filtered && this.props.reviews) {
		itemLists = this.state.filtered.map(item => {
			let filteredReviews

			filteredReviews = this.props.reviews.filter(review => review.itemId === item._id)

		return <ItemIndexItem key={item._id} item={item} filteredReviews={filteredReviews}/>})
		}
		return (
			<div className="item-index">
				<div className="item-lists">
					<div className="item-list-filter">
						<div className="item-list-filter-wrapper">
						<h2>Category</h2>
						<label className="container">Accessories<input name="radio" id="accessories" type="radio" value="accessories" onChange={value => this.toggleFilter(value, "accessories")} /><span className="checkmark" /></label>
						<label className="container">Food<input name="radio" id="food" type="radio" value="food" onChange={value => this.toggleFilter(value, "food")} /><span className="checkmark" /></label>
						<label className="container">Pets<input name="radio" id="pets" type="radio" value="pets" onChange={value => this.toggleFilter(value, "pets")}/><span className="checkmark" /></label>
						<label className="container">Toys<input name="radio" id="toys" type="radio" value="toys" onChange={value => this.toggleFilter(value, "toys")} /><span className="checkmark" /></label>
						<label className="container">All<input name="radio" id="special-box" type="radio" value="accessories" onChange={value => this.toggleFilter(value)} /><span className="checkmark" /></label>
						</div>
					</div>
					<ul>
						{itemLists}
					</ul>
				</div>
			</div>
		)
	}
}

export default ItemIndex;