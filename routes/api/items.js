const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Tweet = require('../../models/Item');

router.get("/test", (req, res) => res.json({ msg: "This is the Item route" }));

module.exports = router;