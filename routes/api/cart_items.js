
// show the cart belongs to user (find by userId)

router.get('/:user_id/cart', (req, res) => {
	Cart.find({ userId: req.params.user_id })
		.then(cart => res.json(cart))
		.catch(err =>
			res.status(404).json({ noCartFound: 'No Cart found from that user' }
			)
		);
});


"/:item_carts/:id"


// deleting an Item_Cart instance

router.delete("/:item_cart_id", (req, res) => {
	// authentification
	passport.authenticate('jwt', { session: false }),
		ItemCart.findByIdAndRemove(req.params.item_cart_id, err => {
			if (err) res.send(err);
			else res.json({
				message: "Product has been deleted"
			});
		});
});


module.exports = router;