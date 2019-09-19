import React from 'react';

class Review extends React.Component {
    render() {
        return(
            <div className="review">
                {this.props.review.rating}
                {this.props.review.title}
                {this.props.review.comment}
            </div>
        )
    }
}

export default Review;