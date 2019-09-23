import React from 'react';

import Star_Filled from '../../assets/images/star_filled.svg';
import StarEmpty from '../../assets/images/star_empty.svg';

class Review extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let year = Number(this.props.review.date.slice(0,4));
        let monthIdx = Number(this.props.review.date.slice(5,7));
        let month = months[monthIdx - 1];
        let day = Number(this.props.review.date.slice(8,10));

        const stars = [];
        let i = 0;
        while(i < this.props.review.rating) {
            stars.push(<img src={Star_Filled} alt="star" />);
            i++;
        }
        while(i < 5) {
            stars.push(<img src={StarEmpty}/>);
            i++;
        }

        return(
            <div className="review">
                <div className="ratingUsername">{this.props.review.user}</div>
                <div className="ratingAndTitle">
                    <div className="reviewShowRating">{stars}</div>
                    <div className="reviewTitle">{this.props.review.title}</div>
                </div>
                <div className="reviewDate">{month} {day}, {year}</div>
                <div className="reviewComment">{this.props.review.comment}</div>
            </div>
        )
    }
}

export default Review;