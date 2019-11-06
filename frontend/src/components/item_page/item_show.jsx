import React from 'react';
import Cart from '../../assets/images/cart.png';
import CommentSectionContainer from './comment_section_container';
import ReactImageMagnify from 'react-image-magnify';
import { withRouter, Link } from 'react-router-dom';

import Star_Filled from '../../assets/images/star_filled.svg';
import StarEmpty from '../../assets/images/star_empty.svg';

class ItemShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = { }
    this.handleClick = this.handleClick.bind(this);
    this.currentRating = this.currentRating.bind(this);
  }

  componentDidMount(){
    this.props.fetchItem(this.props.match.params.id);
    // window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState){
    // if (prevProps.match.params.id !== this.props.match.params.id) {
    //   this.props.fetchItem(this.props.match.params.id)
    // }

    if (!this.props.item && !prevProps.items){
      this.props.fetchItem(this.props.match.params.id)
    }
  }

  handleClick() {
	const { currentUser, item, createCartItem } = this.props;
	const cartItem = Object.assign({}, {
	  userId: currentUser.id,
	  itemId: item._id
	});

	createCartItem(cartItem).then(() => this.setState({
	  userId: cartItem.userId,
	  itemId: cartItem.itemId
	}));
  }

  EditButton(incoming){
    if(incoming.props.currentUser.id === incoming.props.item.sellerId){
      return (
        <div className="edit-item-button">
          <div className="item-edit">edit</div>
          <Link to={`/edit_item/${incoming.props.item._id}`}><div className="atc-div"><input type="button" className="edit-item" value="Edit Your Product" /></div></Link>
        </div>
      )
    }
    return(
      <div></div>
    )
  }

  currentRating(avg) {
    this.setState({rating: avg})
  }

  render() {
    if(!this.props.item){
      return(
        <div></div>
      )
    }
    let filteredReviews
    if(this.props.reviews && this.props.item){
      filteredReviews = this.props.reviews.filter(review => review.itemId === this.props.item._id)
    }


    let numberOfRatings
    let avg
    let stars2 = []

    const times = x => f => {
      if (x > 0) {
        f()
        times(x - 1)(f)
      }
    }


    if (filteredReviews && filteredReviews.length > 0) {
      let ratings = filteredReviews.map(review => review.rating)
      numberOfRatings = ratings.length
      avg = Math.round(ratings.reduce((a, b) => a + b) / ratings.length)
    }

    if (!numberOfRatings) {
      numberOfRatings = 0
    }

    if (!avg) {
      times(5)((x) => (stars2.push(<img key={x} src={StarEmpty} />)))
      avg = "no ratings"
    }

    if (avg) {
      let emptyStars2 = 5 - avg
      times(avg)((x) => (stars2.push(<img key={x} src={Star_Filled} />)))
      times(emptyStars2)((x) => (stars2.push(<img key={x} src={StarEmpty} />)))
    }

    const item = this.props.item;
    
    const stars = [];
    let i = 0;

    while(i < this.state.rating) {
      stars.push(<img src={Star_Filled} alt="star" />);
      i++;
    }
    while(i < 5) {
      stars.push(<img src={StarEmpty} alt="empty star"/>);
      i++;
    }

    let reviewStars = this.state.rating ? <div className="reviewShowRating">{stars}</div> : <div className="noReviews">No reviews yet</div>;

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
            <p className="item-username">By {this.props.item.user}</p>
            { stars2 }
            <h4>Price: 
              <span className="item-price"> ${item.price}</span>
            </h4>
            <p>{item.description}</p>
            <CommentSectionContainer rating={this.currentRating} item={this.props.item} />
          </div>
          <div className="item-right-col">
            <span className="item-price"> ${item.price}</span>
            <p>Want it by Friday? Too late. How about next month? Buy AmazonForest Prime and get it never.</p>
            <h3>In Stock.</h3>
		<div className="add-to-cart-button" onClick={this.handleClick}>
              <img src={Cart} className="item-cart-image" alt="cart" />
              <div className="atc-div"><input type="button" className="add-to-cart" value="Add to Cart" /></div>
            </div>
            {/* <div className="add-to-wl-button">
              <div className="item-wl-plus">+</div>
              <div className="atc-div"><input type="button" className="add-to-wl" value="Add to Wish List" /></div>
            </div> */}
            <this.EditButton props={this.props}/>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ItemShow);