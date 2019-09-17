const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Reviews = require('../../models/Reviews');

router.get("/:id/reviews", (req, res) => {
  Item.findById(req.params.id)
    .sort({ date: -1 })
    .then(reviews => res.json(reviews))
    .catch(err => res.status(404).json({ noReviewsFound: "No reviews found" }));
});

// create a review
router.post('/:id',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		const item = Item.findById(req.params.id);

		const newReview = new Review({
			rating: req.body.rating,
			userId: req.user.id,
			itemId: item.id
		});

		newReview
			.save()
			.then(review => res.json(review));
	});

module.exports = router;