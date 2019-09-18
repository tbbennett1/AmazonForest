import React from 'react';
import ItemIndexItem from './item_index_item';

class ItemIndex extends React.Component {
	componentDidMount(){
		this.props.fetchItems()
	}

	render() {
		const { items } = this.props

		return (
			<div className="item-index">
				<div className="item-lists">
					<ul>
						{items.map(item => <ItemIndexItem key={item.id} item={item}/>)}
					</ul>
				</div>
			</div>
		)
	}
}

export default ItemIndex;