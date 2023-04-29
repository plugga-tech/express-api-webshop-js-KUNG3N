const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  lager: Number
});

const Product = mongoose.model('Product', productSchema);

router.get('/', function(req, res, next) {
  Product.find()
    .then(products => {
      res.json(products);
    })
    .catch(next);
});


router.get('/:productId', function(req, res, next) {
    const productId = req.params.productId;
    Product.findById(productId).then((product) => {
      res.send(product);
    }).catch((err) => {
      next(err);
    });
  });

router.post('/add', function(req, res){
    const {name, description, price, lager} = req.body;

    if (!name || !description || !price || !lager) {
        res.status(400).send("name, description, price and lager are required");
        return;
    }

    const product = new Product ({
        name: name,
        description: description,
        price: price, 
        lager: lager
    })
    product.save().catch(err => {
        next(err);
    }).then(product => {
        res.send(product);
    });

})

module.exports = router;