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
    .then(product => res.json({ products: product }))
    .catch(err => res.json({ message: "Something went wrong.", error: err }));
};
