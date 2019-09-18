
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Item = require('./models/Item');
const Cart = require('./models/Cart');
const ItemCart = require('./models/Item_Cart');
const mongoose = require('mongoose');
const faker = require('faker')

const db = require("./config/keys").mongoURI;

const user = new User({
  name: "Bagel",
  email: "bagel@gmail.com",
  password: "123456"
});

user.save();

const cart1 = new Cart({
	ownerId: "5d8252686711da301181fe6a"
});

cart1.save();

fakeProducts = [];

for (let i = 0; i < 10; i++) {
  const itemName = faker.commerce.productName();
  fakeItem = new Item ({
    price: faker.commerce.price(),
    title: itemName,
    description: `A ${faker.commerce.productAdjective()} ${itemName} 
    made with locally-sourced ${faker.commerce.productMaterial()}`,
    sellerId: user._id,
    image_url: faker.image.animals()
  })
  fakeProducts.push(fakeItem);
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB successfully")
    
	// Item.find({}, (err, items) => {
	// 	items.forEach(item => {
	// 		item.remove();
	// 	})
	// })

    Item.insertMany(fakeProducts, function (err, docs) {
      if (err) throw err;
      else console.log(docs);
    });

  });

  	ItemCart.find({}, (err, itemCarts) => {
			itemCarts.forEach(item => {
			item.remove();
		})
	})

const itemCart1 = new ItemCart({
	itemId: "5d8296b0e157b3097a9a98df",
	cartId: "5d8296b0e157b3097a9a98dd"
});

itemCart1.save();

const itemCart2 = new ItemCart({
	itemId: "5d8296b0e157b3097a9a98e4",
	cartId: "5d8296b0e157b3097a9a98dd"
});

itemCart2.save();

const itemCart3 = new ItemCart({
	itemId: "5d8296b0e157b3097a9a98e2",
	cartId: "5d8296b0e157b3097a9a98dd"
});

itemCart3.save();