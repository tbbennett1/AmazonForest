import React from 'react';

import ReviewContainer from './review_container';
import Star_Filled from '../../assets/images/star_filled.svg';
import StarEmpty from '../../assets/images/star_empty.svg';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: "", comment: "", rating: 0, 
            star_one: false, star_two: false, star_three: false, 
            star_four: false, star_five: false, 
            rating_error: false, title_error: false, comment_error: false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStarOne = this.handleStarOne.bind(this);
        this.handleStarTwo = this.handleStarTwo.bind(this);
        this.handleStarThree = this.handleStarThree.bind(this);
        this.handleStarFour = this.handleStarFour.bind(this);
        this.handleStarFive = this.handleStarFive.bind(this);
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.item._id);
    }

    update(field) {
        return (e) => this.setState({[field]: e.target.value, title_error: false, comment_error: false})
    }

    handleStarOne() {
        this.setState({
            star_one: true, star_two: false, star_three: false, 
            star_four: false, star_five: false, rating: 1, rating_error: false})
    }

    handleStarTwo() {
        this.setState({
            star_one: true, star_two: true, star_three: false, 
            star_four: false, star_five: false, rating: 2, rating_error: false})
    }

    handleStarThree() {
        this.setState({
            star_one: true, star_two: true, star_three: true, 
            star_four: false, star_five: false, rating: 3, rating_error: false})
    }

    handleStarFour() {
        this.setState({
            star_one: true, star_two: true, star_three: true, 
            star_four: true, star_five: false, rating: 4, rating_error: false})
    }

    handleStarFive() {
        this.setState({
            star_one: true, star_two: true, star_three: true, 
            star_four: true, star_five: true, rating: 5, rating_error: false})
    }

    handleSubmit(e) {
        e.preventDefault();

        if(this.state.rating === 0) {
            this.setState({rating_error: true})
        }
        if(this.state.title === "") {
            this.setState({title_error: true})
        }
        if(this.state.comment === "") {
            this.setState({comment_error: true})
        }

        if(this.state.rating_error || this.state.title_error || this.state.comment_error) {
            return;
        }

        const review = Object.assign({}, {
            rating: this.state.rating,
            title: this.state.title, 
            comment: this.state.comment,
            userId: this.props.currentUser.id,
            user: this.props.currentUser.name,
            itemId: this.props.item._id,
            helpful: []
        });
        this.props.createReview(review).then(() => this.setState({
            title: "", comment: "", rating: 0, 
            star_one: false, star_two: false, star_three: false, 
            star_four: false, star_five: false,
            rating_error: false, title_error: false, comment_error: false}
        ))
    }

    render() {
        if(!this.props.reviews) {
            return <div></div>
        }

        let avg_rating = 0;
        for(let i = 0; i < this.props.reviews.length; i++) {
            avg_rating += this.props.reviews[i].rating;
        }
        this.props.rating(avg_rating / this.props.reviews.length);

        const star_one = this.state.star_one ? Star_Filled : StarEmpty;
        const star_two = this.state.star_two ? Star_Filled : StarEmpty;
        const star_three = this.state.star_three ? Star_Filled : StarEmpty;
        const star_four = this.state.star_four ? Star_Filled : StarEmpty;
        const star_five = this.state.star_five ? Star_Filled : StarEmpty;

        const reviews = this.props.reviews.map(review => {
            return <ReviewContainer key={review._id} review={review} deleteReview={this.props.deleteReview} />
        })

        return(
            <div className="item-comment-section">
                <h3>Review this product</h3>
                <p>Share your thoughts with other customers</p>
                <form className="commentSubmitForm" onSubmit={this.handleSubmit}>

                    <h3>Overall rating</h3>
                    <div className="reviewSubmitRating">
                        <img src={star_one} onClick={this.handleStarOne} alt="star" />
                        <img src={star_two} onClick={this.handleStarTwo} alt="star" />
                        <img src={star_three} onClick={this.handleStarThree} alt="star" />
                        <img src={star_four} onClick={this.handleStarFour} alt="star" />
                        <img src={star_five} onClick={this.handleStarFive} alt="star" />
                    </div>
                    { this.state.rating_error && <p className="submitError">! Please select your star rating</p> }

                    <h3>Add a headline</h3>
                    <input className="reviewInput" type="text" value={this.state.title} 
                    placeholder="What's most important to know?" onChange={this.update("title")} />
                    { this.state.title_error && <p className="submitError">! Please enter your headline</p>}

                    <h3>Write your review</h3>
                    <textarea className="reviewInput" type="text" value={this.state.comment} 
                    placeholder="What did you like or dislike? What did you use this product for?" 
                    onChange={this.update("comment")} />
                    { this.state.comment_error && <p className="submitError">! Please enter your review</p>}

                    <div className="submitSeparator">
                        <button className="form-orange-button" onSubmit={this.handleSubmit} >
                            <input type="submit" value="Submit" />
                        </button>
                    </div>
                </form>
                <h4>Showing {reviews.length} reviews</h4>
                <ul>
                    {reviews}
                </ul>
            </div>
        )
    }
}

export default CommentSection;