const { Product } = require("../models/productmgr.model");

module.exports.index = (_, res) => {
  res.json({
    message: "Welcome to Product Manager."
  });
};

module.exports.createProduct = (req, res) => {
  const { title, price, description } = req.body;
  Product.create({
    title,
    price,
    description
  })
    .then(product =>
      res.json({ message: "Product added successfully.", products: product })
    )
    .catch(err => res.json({ message: "Something went wrong.", error: err }));
};

module.exports.allProducts = (_, res) => {
  Product.find({})
    .then(products => res.json(products))
    .catch(err =>
      res.json({ message: "Cannot retrieve products.", error: err })
    );
};

module.exports.getProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then(product => res.json(product))
    .catch(err => res.json(err));
};
