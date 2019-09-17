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
	rating: {
    range: {
      min: { type: Number, min: 1 },
      max: { type: Number, min: 5 }
    },
		required: true
	}
});

module.exports = Review = mongoose.model('review', ReviewSchema);