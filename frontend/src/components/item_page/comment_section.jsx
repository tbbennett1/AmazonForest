import React from 'react';

import Review from './review';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: "", comment: ""};
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
            title: this.state.title, 
            comment: this.state.comment,
            userId: this.props.currentUser.id,
            itemId: this.props.item._id
        });
        this.props.createReview(this.props.item._id, review).then(() => this.setState({
            title: "", comment: ""
        }))
    }

    render() {
        if(!this.props.reviews) {
            return <div></div>
        }

        const reviews = this.props.reviews.map(review => {
            return <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />
        })

        return(
            <div className="item-comment-section">
                <form className="commentSubmitForm" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.title} 
                    placeholder="What's most important to know?" onChange={this.update("title")} />
                    <textarea type="text" value={this.state.comment} 
                    placeholder="What did you like or dislike? What did you use this product for?" 
                    onChange={this.update("comment")} />
                    <button onClick={this.handleClick}>
                        <input type="submit" value="Write a Customer Review" />
                    </button>
                </form>
                <ul>
                    {reviews}
                </ul>
            </div>
        )
    }
}

export default CommentSection;