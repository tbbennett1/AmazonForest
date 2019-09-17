const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
	ownerId: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Cart = mongoose.model('Cart', CartSchema);