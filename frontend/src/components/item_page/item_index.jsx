import React from 'react';
import ItemIndexItem from './item_index_item';

class ItemIndex extends React.Component {
	componentDidMount(){
		this.props.fetchItems()
	}

	render() {
		const { items } = this.props
		let itemLists 
		if (items && items[0]) {
			itemLists = items[0].map(item => <ItemIndexItem key={item.id} item={item} />)
		}
		return (
			<div className="item-index">
				<div className="item-lists">
					<ul>
						{itemLists}
					</ul>
				</div>
			</div>
		)
	}
}

export default ItemIndex;