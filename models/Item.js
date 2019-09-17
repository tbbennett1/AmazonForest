const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	sellerId: {
		type: Schema.Types.ObjectId,
		ref: 'users'
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
	date: {
		type: Date,
		default: Date.now
	},
	image_url: {
		type: String,
		required: false
	}
});

module.exports = Item = mongoose.model('items', ItemSchema);