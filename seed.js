// const faker = require('faker');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Item = require('./models/Item');
const mongoose = require('mongoose');

const db = require("./config/keys").mongoURI;

// categories = [
//   "jewelry_and_accessories",
//   "clothing_and_shoes",
//   "home_and_living",
//   "wedding_and_party",
//   "toys_and_entertainment",
//   "art_and_collectibles",
//   "craft_supplies",
//   "vintage",
//   "gifts"
// ];

// fakeUsers = [];
// fakeProducts = [];

// for (let i = 0; i < 100; i++) {
//   fakeUser = new User({
//     fName: faker.name.firstName(),
//     email: faker.internet.email(),
//     password: "password"
//   });

//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(fakeUser.password, salt, (err, hash) => {
//       if (err) {
//         throw err;
//       }
//       fakeUser.password = hash;
//       fakeUsers.push(fakeUser);
//     })
//   })

//   fakeUser.save()


//   const productName = faker.commerce.productName();

		

  // fakeProducts.push(fakeProduct);
// }

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB successfully")
    // User.insertMany(fakeUsers, function(err, docs) {
    //   if (err) throw err;
    //   else console.log(docs);
    // });
    // User.deleteMany({}, (err) => {
    //   console.log(err);
    //   });
    // Item.deleteMany({});
    User.find({}, (err, users) => {
      users.forEach(user => {
        user.remove();
      })
      console.log(err);
      console.log(users);
    })

    const user = new User({
      name: "Bagel",
      email: "bagel@gmail.com",
      password: "123456"
    });
    user.save();

    const products = [
      new Item({
      title: "toy 1",
      price: 10,
      description: "toy 1",
      sellerId: user._id
      }),
      new Item({
      title: "toy 2",
      price: 20,
      description: "toy 2",
      sellerId: user._id
      })
    ]

    Item.insertMany(products, function (err, docs) {
      if (err) throw err;
      else console.log(docs);
    });

    // mongoose.connection.close();
  });

  
// node.seeds.js
