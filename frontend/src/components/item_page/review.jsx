import React from 'react';

import Star_Filled from '../../assets/images/star_filled.svg';
import StarEmpty from '../../assets/images/star_empty.svg';
import DefaultUser from '../../assets/images/default_user.jpg';

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // this.props.fetchReview(this.props.review._id);
    }

    handleClick() {
        const new_review = this.props.review;
        new_review.helpful.push(this.props.currentUser.id);

        this.props.updateReview(new_review, this.props.review._id)
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

        const helpful = this.props.review.helpful.includes(this.props.currentUser.id) ? <p className="helpfulThankYou">Thank you for your feedback</p> : <button className="helpfulButton" onClick={this.handleClick}>Helpful</button>

        return(
            <div className="review">
                <div className="usernameAndIcon">
                    <img className="reviewUserIcon" src={DefaultUser} alt="user icon" />
                    <div className="ratingUsername">{this.props.review.user}</div>
                </div>
                <div className="ratingAndTitle">
                    <div className="reviewShowRating">{stars}</div>
                    <div className="reviewTitle">{this.props.review.title}</div>
                </div>
                <div className="reviewDate">{month} {day}, {year}</div>
                <div className="reviewComment">{this.props.review.comment}</div>
                <div className="reviewHelpful">{this.props.review.helpful.length} people found this helpful</div>
                <div>{helpful}</div>
            </div>
        )
    }
}

export default Review;