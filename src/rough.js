const data = require("../data/data.js");
const Product = require("../models/product.model.js");
var jwt = require("jsonwebtoken");
const mySecret = process.env["secret"];

async function authCheck(req, res, next) {
  const token = req.headers.auth;
  try {
    var decoded = jwt.verify(token, mySecret);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).send({ message: "Wrong credentials" });
  }
}

async function recommendations(req, res, next) {
  const { id } = req.params;
  let recommendedArray = [];

  try {
    if (id) {
      let currentProduct = req.currentProduct;
      recommendedArray = await Product.find({
        outOfStock: false,
        tags: {
          animal: `${currentProduct.tags.animal}`,
          category: `${currentProduct.tags.category}`,
        },
      });
      recommendedArray = recommendedArray.filter(
        (item) => String(item._id) !== id
      );
    } else {
      recommendedArray = await Product.find({
        outOfStock: false,
        fastDelivery: true,
      });
    }
    req.recommendations = recommendedArray.slice(0, 4);
    next();
  } catch (error) {
    console.error("error ->", error);
    res.send({ status: "failure", products: [] });
  }
}

module.exports = {
  recommendations: recommendations,
  authCheck,
};
