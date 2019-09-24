const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Review = require('../../models/Review');

router.get("/", (req, res) => {
	let itemId = req.query.itemId;
	Review.find({ itemId: itemId })
		.sort({ date: -1 })
		.then(reviews => res.json(reviews))
		.catch(err => res.status(404).json({ noReviewsFound: "No reviews found" }));
	// res.send(reviews);
});

router.get("/:id", (req, res) => {
  Review.find({itemId: req.params.itemId})
    .sort({ date: -1 })
    .then(reviews => res.json(reviews))
    .catch(err => res.status(404).json({ noReviewsFound: "No reviews found" }));
});

// create a review
router.post('/',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		const newReview = new Review({
			rating: req.body.rating,
			userId: req.user.id,
			itemId: req.body.itemId,
			title: req.body.title,
			comment: req.body.comment,
			user: req.body.user,
			helpful: req.body.helpful
		});

		newReview
			.save()
			.then(review => res.json(review));
	});

router.patch("/:id", (req, res) => {
	debugger;
	Review.findOneAndUpdate({ _id: req.params.id },
	  {
		$set:
		{
			rating: req.body.rating,
			itemId: req.body.itemId,
			title: req.body.title,
			comment: req.body.comment,
			helpful: req.body.helpful
		}
	}).then(review => {
		debugger;
		console.log(review);
	})
});

module.exports = router;