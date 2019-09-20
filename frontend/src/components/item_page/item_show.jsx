import React from 'react';
import Cart from '../../assets/images/cart.png';
<<<<<<< HEAD
import ReactImageZoom from 'react-image-zoom';
=======
import CommentSectionContainer from './comment_section_container';
>>>>>>> c939c950303dfacbd5d88bbc22d1a919e2616331

class ItemShow extends React.Component {
  componentDidMount(){
    this.props.fetchItem(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchItem(this.props.match.params.id)
    }

    if (!this.props.item){
      this.props.fetchItem(this.props.match.params.id)
    }

  }

  render() {
    if(!this.props.item){
      return(
        <div></div>
      )
    }
    const item = this.props.item;
    const props = { 
      width: 400,  
      // zoomWidth: 50, 
      zoomLensStyle: {
        width: 40,
        height: 12
      },
      img: this.props.item.image_url, 
      scale: 1.5,
      offset: { vertical: 0, horizontal: 10 }
    }
    const reviews = this.props.reviews;

    return (
      <div>
        <div className="item-show-top">
          <div className="item-left-col">
            <ReactImageZoom {...props} className="item-img"/>
              {/* <img src={this.props.item.image_url}/> */}
            <img src={this.props.item.image_url} alt="item" />
          </div>
          <div className="item-center-col">
            <h1 className="item-title">{item.title}</h1>
            <h4>Price: 
              <span className="item-price"> ${item.price}.00</span>
            </h4>
            <p>{item.description}</p>
            <CommentSectionContainer item={this.props.item} />
          </div>
          <div className="item-right-col">
            <span className="item-price"> ${item.price}.00</span>
            <p>Want it by Friday? Too late. How about next month? Buy AmazonForest Prime and get it never.</p>
            <h3>In Stock.</h3>
            <div className="add-to-cart-button">
              <img src={Cart} className="item-cart-image" alt="cart" />
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