const CommentSchema = new Schema({
	itemId: {
		type: Schema.Types.ObjectId,
		ref: 'items'
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	body: {
		type: String,
		required: true
	}
});

module.exports = Comment = mongoose.model('comments', CommentSchema);
