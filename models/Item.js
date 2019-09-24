const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	sellerId: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	user: {
		type: String
	},
	price: {
		type: Number,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: false
	},
	image_url: {
		type: String,
		required: false
	},
  category: {
    type: String,
    required: false
  },
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Item = mongoose.model('items', ItemSchema);