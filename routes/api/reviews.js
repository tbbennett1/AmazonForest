const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Review = require('../../models/Review');

router.get("/", (req, res) => {
	let itemId = req.query.itemId;
<<<<<<< HEAD
=======
	console.log(itemId);
>>>>>>> 1f21f7e3a2b196101c223074e613c262bdae0adb
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
			user: req.body.user
		});

		newReview
			.save()
			.then(review => res.json(review));
	});

module.exports = router;