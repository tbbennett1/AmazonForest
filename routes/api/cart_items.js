const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const CartItem = require('../../models/Cart_Item');

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
	CartItem.find({ userId: req.user.id })
		.populate("item")
		.then(cartItems => res.json(cartItems))
		.catch(err =>
			res.status(404).json({ noCartItemFound: 'No Items found from this user' }
			)
		);
});

router.post('/',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		const newCartItem = new CartItem({
			userId: req.body.userId,
			itemId: req.body.itemId
		});

		newCartItem
			.save()
			.then(cartItem => res.json(cartItem));
	});
	
router.delete("/:cart_item_id", passport.authenticate('jwt', { session: false }), (req, res) => {
		CartItem.findByIdAndRemove(req.params.cart_item_id, err => {
			if (err) res.send(err);
			else res.json({
				message: "the item has been deleted from cart"
			});
		});
});


module.exports = router;