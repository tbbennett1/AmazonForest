const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const Item = require('../../models/Item');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
})

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = { id: user.id, email: user.email, name: user.name };

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
	const { errors, isValid } = validateLoginInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	const email = req.body.email;
	const password = req.body.password;

	User.findOne({ email }).then(user => {
		if (!user) {
			errors.email = "This user does not exist";
			return res.status(400).json(errors);
		}

		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				const payload = { id: user.id, email: user.email, name: user.name };

				jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
					res.json({
						success: true,
						token: "Bearer " + token
					});
				});
			} else {
				errors.password = "Incorrect password";
				return res.status(400).json(errors);
			}
		});
	});
});


// show items sold by user (find by sellerId)

router.get('/:user_id/items', (req, res) => {
  Item.find({ sellerId: req.params.user_id })
    .then(items => res.json(items))
    .catch(err =>
      res.status(404).json({ noItemsFound: 'No items found from that user' }
      )
    );
});

// show the cart belongs to user (find by userId)

router.get('/:user_id/cart', (req, res) => {
  Cart.find({ userId: req.params.user_id })
    .then(cart => res.json(cart))
    .catch(err =>
      res.status(404).json({ noCartFound: 'No Cart found from that user' }
      )
    );
});




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