const ReviewSchema = new Schema({
	itemId: {
		type: Schema.Types.ObjectId,
		ref: 'items'
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	rating: {
		type: Number, // from 1 to 5
		required: true
	}
});

module.exports = Review = mongoose.model('review', ReviewSchema);