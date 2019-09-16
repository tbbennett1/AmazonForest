const ReviewSchema = new Schema({
	item: {
		type: Schema.Types.ObjectId,
		ref: 'items'
	},
	rating: {
		type: Number, // from 1 to 5
		required: true
	}
});

module.exports = Review = mongoose.model('review', ReviewSchema);