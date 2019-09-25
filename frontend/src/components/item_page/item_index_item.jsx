import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StarEmpty from '../../assets/images/star_empty.svg';
import Star_Filled from '../../assets/images/star_filled.svg';

class ItemIndexItem extends Component {
    render(){
        const { item, filteredReviews} = this.props
        let numberOfRatings
        let avg
        let stars = []

        const times = x => f => {
            if (x > 0) {
                f()
                times(x - 1)(f)
            }
        }

        if (filteredReviews && filteredReviews.length > 0){
            let ratings = filteredReviews.map(review => review.rating)
            numberOfRatings = ratings.length
            avg = Math.round(ratings.reduce((a, b) => a + b) / ratings.length)
        }

        if (!numberOfRatings){
            numberOfRatings = 0
        }

        if (!avg){
            times(5)(()=>(stars.push(<img src={StarEmpty} />)))
            avg = "no ratings"
        }

        if (avg){
            let emptyStars = 5 - avg
            times(avg)(() => (stars.push(<img src={Star_Filled} />)))
            times(emptyStars)(() => (stars.push(<img src={StarEmpty} />)))
        }

        return(
            <li className="index-item">
                <div className="index-item-wrapper">
                    <div>
                        <Link to={`/items/${item._id}`}><img src={item.image_url} alt=""/></Link>
                    </div>
                    <div className="index-item-details">
                        <Link to={`/items/${item._id}`}>{item.title}</Link>
                        <div className="index-item-ratings"><Link to={`/items/${item._id}`}><div>{stars}</div><div>{numberOfRatings}</div></Link></div>
                        <div>$ {item.price}</div>
                    </div>

                    <Link className="form-orange-button item-index-button" to={`/items/${item._id}`}>See details</Link>
                </div>
            </li>
        )
    }
}

export default ItemIndexItem