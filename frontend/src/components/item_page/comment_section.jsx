import React from 'react';

import ReviewContainer from './review_container';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: "", comment: "", rating: 5};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchReviews().then(() => {
            this.props.fetchItem(this.props.item.id);
        });
    }

    update(field) {
        return (e) => this.setState({[field]: e.target.value})
    }

    handleClick() {
    }

    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, {
            rating: 5,
            title: this.state.title, 
            comment: this.state.comment,
            userId: this.props.currentUser.id,
            user: this.props.currentUser.name,
            itemId: this.props.item._id
        });
        this.props.createReview(this.props.item._id, review).then(() => this.setState({
            title: "", comment: "", rating: 5
        }))
    }

    render() {
        // debugger;
        if(!this.props.reviews) {
            return <div></div>
        }

        const reviews = this.props.reviews.map(review => {
            return <ReviewContainer key={review._id} review={review} deleteReview={this.props.deleteReview} />
        })

        return(
            <div className="item-comment-section">
                <h3>Review this product</h3>
                <p>Share your thoughts with other customers</p>
                <form className="commentSubmitForm" onSubmit={this.handleSubmit}>
                    <h3>Add a headline</h3>
                    <input className="reviewInput" type="text" value={this.state.title} 
                    placeholder="What's most important to know?" onChange={this.update("title")} />
                    <h3>Write your review</h3>
                    <textarea className="reviewInput" type="text" value={this.state.comment} 
                    placeholder="What did you like or dislike? What did you use this product for?" 
                    onChange={this.update("comment")} />
                    <div className="submitSeparator">
                        <button class="form-orange-button" onClick={this.handleClick}>
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