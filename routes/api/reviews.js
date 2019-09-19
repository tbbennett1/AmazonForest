const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Review = require('../../models/Review');

router.get("/:id", (req, res) => {
  Review.find({itemId: req.params.id})
    .sort({ date: -1 })
    .then(reviews => res.json(reviews))
    .catch(err => res.status(404).json({ noReviewsFound: "No reviews found" }));
});

// create a review
router.post('/:id',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {

		const newReview = new Review({
			rating: req.body.rating,
			userId: req.user.id,
			itemId: req.params.id,
			title: req.body.title,
			comment: req.body.comment
		});

		newReview
			.save()
			.then(review => res.json(review));
	});

module.exports = router;