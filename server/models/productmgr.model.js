const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Please enter a product title."] },
    price: {
      type: Number,
      required: [true, "Please enter the product price."]
    },
    description: {
      type: String,
      minlength: [5, "Please enter a valid description"]
    }
  },
  { timestamps: true }
);

module.exports.Product = mongoose.model("Product", ProductSchema);
