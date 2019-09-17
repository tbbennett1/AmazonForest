const CommentSchema = new Schema({
	item: {
		type: Schema.Types.ObjectId,
		ref: 'items'
	},
	body: {
		type: String,
		required: true
	}
});

module.exports = Item = mongoose.model('items', ItemSchema);

// I'm new