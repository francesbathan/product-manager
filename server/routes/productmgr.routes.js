const ProductController = require("../controllers/productmgr.controller");

module.exports = function(app) {
  app.get("/api", ProductController.index);
  app.post("/api/products", ProductController.createProduct);
};
