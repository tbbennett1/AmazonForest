
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Item = require('./models/Item');
const CartItem = require('./models/Cart_Item');
const mongoose = require('mongoose');
const faker = require('faker')

const db = require("./config/keys").mongoURI;

// const user = new User({
//   name: "Bagel",
//   email: "bagel@gmail.com",
//   password: "123456"
// });

// user.save();

// fakeProducts = [];

// for (let i = 0; i < 10; i++) {
//   const itemName = faker.commerce.productName();
//   fakeItem = new Item ({
//     price: faker.commerce.price(),
//     title: itemName,
//     description: `A ${faker.commerce.productAdjective()} ${itemName} 
//     made with locally-sourced ${faker.commerce.productMaterial()}`,
//     sellerId: user._id,
//     image_url: faker.image.animals()
//   })
//   fakeProducts.push(fakeItem);
// }

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB successfully")
    
// 	Item.find({}, (err, items) => {
// 		items.forEach(item => {
// 			item.remove();
// 		})
	// })

//     Item.insertMany(fakeProducts, function (err, docs) {
//       if (err) throw err;
//       else console.log(docs);
//     });

  });

// const cartItem1 = new CartItem({
// 	itemId: "5d8296b0e157b3097a9a98df",
// 	userId: "5d8252686711da301181fe6a"
// });

// cartItem1.save();

// const cartItem2 = new CartItem({
// 	itemId: "5d8296b0e157b3097a9a98e4",
// 	userId: "5d8252686711da301181fe6a"
// });

// cartItem2.save();

// const cartItem3 = new CartItem({
// 	itemId: "5d8296b0e157b3097a9a98e2",
// 	userId: "5d8252686711da301181fe6a"
// });

// cartItem3.save();


const cartItem1 = new CartItem({
	itemId: "5d8296b0e157b3097a9a98df",
	userId: "5d8252686711da301181fe6a"
});

cartItem1.save();

const cartItem2 = new CartItem({
	itemId: "5d8296b0e157b3097a9a98e4",
	userId: "5d8252686711da301181fe6a"
});

cartItem2.save();

const cartItem3 = new CartItem({
	itemId: "5d8296b0e157b3097a9a98e2",
	userId: "5d8252686711da301181fe6a"
});

cartItem3.save();