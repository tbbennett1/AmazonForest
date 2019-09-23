const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
	itemId: {
		type: Schema.Types.ObjectId,
		ref: 'items'
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	user: {
		type: String,
		required: true
	},
	rating: {
		range: {
			min: { type: Number, min: 1 },
			max: { type: Number, min: 5 }
		},
		type: Number,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	comment: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Review = mongoose.model('review', ReviewSchema);