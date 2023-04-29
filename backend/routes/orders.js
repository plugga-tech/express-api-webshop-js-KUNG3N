const express = require("express");
const mongoose = require("mongoose");
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

router.post("/add", function (req, res, next) {
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

    order.save().catch(err => {
      next(err);
    }).then(order => {
      res.send(order);
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
