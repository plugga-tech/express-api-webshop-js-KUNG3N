const express = require("express");
const mongoose = require("mongoose");
const { Product } = require("./products");
const router = express.Router();

router.get("/all", function (req, res, next) {
  try {
    Order.find({}).catch(err => {
      next(err);
    }).then(orders => {
      res.send(orders);
    });
  } catch (err) {
    next(err);
  }
});


const orderSchema = new mongoose.Schema({
  user: String,
  products: [
    {
      productId: String,
      quantity: Number
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model("Order", orderSchema);

router.post("/add", async function (req, res, next) {
  try {
    const { user, products } = req.body;

    if (!user || !products || !Array.isArray(products) || products.length === 0) {
      res.status(400).send("user and products are required");
      return;
    }

    const order = new Order({
      user: user,
      products: products
    });

    await order.save();

    for (let orderedProduct of products) {
      let product = await Product.findById(orderedProduct.productId);
      if (product) {
        product.lager -= orderedProduct.quantity;
        await product.save();
      } else {
        throw new Error(`Product with ID ${orderedProduct.productId} not found.`);
      }
    }

    res.send(order);
  } catch (err) {
    next(err);
  }
});


module.exports = router;
