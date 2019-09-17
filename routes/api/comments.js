const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Comment = require('../../models/Comment');

// show all the comments of an item, find an item
router.get("/:id/comments", (req, res) => {
	Item.findById(req.params.id)
		.sort({ date: -1 })
		.then(comments => res.json(comments))
		.catch(err => res.status(404).json({ noCommentsFound: "No comments found" }));
});

// create a comment
router.post('/:id',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
	const item = Item.findById(req.params.id);

	const newComment = new Comment({
		body: req.body.text,
		userId: req.user.id,
		itemId: item.id
    });

    newComment
		.save()
		.then(comment => res.json(comment));
});

module.exports = router;