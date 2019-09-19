import React from 'react';
import Cart from '../../assets/images/cart.png';
import CommentSectionContainer from './comment_section_container';
import { FiMousePointer } from "react-icons/fi";

class ItemShow extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchItem(this.props.match.params.id);
  }

  render() {
    if(!this.props.item){
      return(
        <div></div>
      )
    }
    const item = this.props.item;
    const reviews = this.props.reviews;

    return (
      <div>
        <div className="item-show-top">
          <div className="item-left-col">
            <img src={this.props.item.image_url}/>
          </div>
          <div className="item-center-col">
            <h1 className="item-title">{item.title}</h1>
            <h4>Price: 
              <span className="item-price"> ${item.price}</span>
            </h4>
            <p>{item.description}</p>
            <CommentSectionContainer item={this.props.item} />
          </div>
          <div className="item-right-col">
            <span className="item-price"> ${item.price}</span>
            <p>Want it by Friday? Too late. How about next month? Buy AmazonForest Prime and get it never.</p>
            <h3>In Stock.</h3>
            <div className="add-to-cart-button">
              <img src={Cart} className="item-cart-image"/>
              <div className="atc-div"><input type="button" className="add-to-cart" value="Add to Cart" /></div>
            </div>
            <div className="add-to-wl-button">
              <div className="item-wl-plus">+</div>
              <div className="atc-div"><input type="button" className="add-to-wl" value="Add to Wish List" /></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemShow;