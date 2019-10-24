const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys.js').mongoURI;
const users = require("./routes/api/users");
const items = require("./routes/api/items");
const reviews = require("./routes/api/reviews");
const cartItems = require("./routes/api/cart_items");
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require("path");

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);

app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/users", users);
app.use("/api/items", items);
app.use("/api/reviews", reviews);
app.use("/api/cartitems", cartItems);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
