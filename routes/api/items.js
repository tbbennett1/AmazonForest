const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
// var AWS = require("aws-sdk");

const reviews = require('./reviews');

const Item = require('../../models/Item');

// var storage = multer.memoryStorage();
// var upload = multer({ storage: storage });

router.get("/test", (req, res) => res.json({ msg: "This is the Item route" }));

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ noItemsFound: "No items found" }));
});

router.get("/:item_id", (req, res) => {
  Item.findById(req.params.item_id)
    .then(item => res.json(item))
    .catch(err =>
		res.status(404).json({ noItemsFound: "No item found with that ID" })
    );
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // Add validations back in later
    // const { errors, isValid } = validateTweetInput(req.body);
    // 
    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }
    const newItem = new Item({
      sellerId: req.user.id,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      image_url: req.body.image_url,
      category: req.body.category
    });

    newItem
      .save()
      .then(item => res.json(item));
  }
);

router.patch("/:id", (req, res) => {
  Item.findOneAndUpdate({ _id: req.body._id },
    {
      $set:
      {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image_url: req.body.image_url
      }
    }).then(item => {
      if (item) {
        User.findById(item.owner_id)
          .then(user => {
            if (user) {
              const filter = {
                name: user.name,
                email: user.email,
                _id: user._id
              }
              res.json({ item: item, user: filter })
            }
          })
      }
    })
});

// router.use('/items/:itemId/reviews/', reviews)

module.exports = router;


