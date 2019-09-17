const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemCartSchema = new Schema({
	itemId: {
		type: Schema.Types.ObjectId,
		ref: 'items'
	},
	cartId: {
		type: Schema.Types.ObjectId,
		ref: 'carts'
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = ItemCart = mongoose.model('itemCart', ItemCartSchema);