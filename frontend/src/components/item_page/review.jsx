import React from 'react';

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

        return(
            <div className="review">
                {this.props.review.user}
                <div className="ratingAndTitle">
                    <div className="reviewRating">{this.props.review.rating}</div>
                    <div className="reviewTitle">{this.props.review.title}</div>
                </div>
                <div className="reviewDate">{month} {day}, {year}</div>
                <div className="reviewComment">{this.props.review.comment}</div>
            </div>
        )
    }
}

export default Review;