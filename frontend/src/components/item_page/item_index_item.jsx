import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemIndexItem extends Component {
    render(){
        const { item } = this.props
        return(
            <li className="index-item">
                <div className="index-item-wrapper">
                    <div>
                        <Link to={`/items/${item._id}`}><img src={item.image_url} alt=""/></Link>
                    </div>
                    <div className="index-item-details">
                        <div>$ {item.price}</div>
                        <Link to={`/items/${item._id}`}>{item.title}</Link>
                    </div>

                    <Link className="form-orange-button item-index-button" to={`/items/${item._id}`}>See details</Link>
                </div>
            </li>
        )
    }
}

export default ItemIndexItem