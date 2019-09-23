import React from 'react';
import Cart from '../../assets/images/cart.png';
import CommentSectionContainer from './comment_section_container';
import ReactImageMagnify from 'react-image-magnify';

class ItemShow extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
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

  handleClick() {
	  
	  const { currentUser, item, createCartItem } = this.props;
	//   debugger;
	  const cartItem = Object.assign({}, {
		  userId: currentUser.id,
		  itemId: item._id
	  });
	  createCartItem(cartItem).then(() => this.setState({
		  userId: cartItem.userId,
		  itemId: cartItem.itemId
	  }));
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
            <ReactImageMagnify {...{
              smallImage: {
                isFluidWidth: true,
                src: this.props.item.image_url,
                srcSet: this.srcSet,
                sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
              },
              largeImage: {
                src: this.props.item.image_url,
                width: 3500,
                height: 2000
              },
              enlargedImageContainerDimensions: {
                width: '125%',
                height: '125%'
              }
            }} />
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
		<div className="add-to-cart-button" onClick={this.handleClick}>
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