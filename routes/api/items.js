const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
// var AWS = require("aws-sdk");

const Item = require('../../models/Item');

// var storage = multer.memoryStorage();
// var upload = multer({ storage: storage });

// router.get("/test", (req, res) => res.json({ msg: "This is the Item route" }));

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ noItemsFound: "No items found" }));
});

router.get("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err =>
		res.status(404).json({ noItemsFound: "No item found with that ID" })
    );
});

module.exports = router;


