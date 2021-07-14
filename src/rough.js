const express = require("express");
const router = express.Router();

const Wishlist = require("../models/wishlist.model.js");
const Product = require("../models/product.model.js");

const { findWishlist } = require("../middleWare/wishlist.js");

router.param("id", async (req, res, next, id) => {
  try {
    const currentProduct = await Product.findById(id);
    req.currentProduct = currentProduct;
    next();
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error ! Couldn't find Product to add to wishlist" });
  }
});

router.use(findWishlist);

router.post("/", async (req, res) => {
  let { localwishlist } = req.body;
  let currentWishlist = req.wishlist;
  let wishlistArray = currentWishlist.wishlist;
  localwishlist = localwishlist.filter((product) => {
    if (
      wishlistArray.find((item) => String(item.productId) === product.productId)
    ) {
      return false;
    }
    return true;
  });
  wishlistArray = [...localwishlist, ...wishlistArray];
  currentWishlist.wishlist = wishlistArray;
  let updatedWishlist = [];
  try {
    let response = await currentWishlist.save();
    updatedWishlist = await Promise.all(
      wishlistArray.map(async (product) => {
        let currentProduct = await Product.findById(product.productId);
        currentProduct.wishlist = true;
        return currentProduct;
      })
    );
  } catch (error) {
    console.error("error ->", error);
  }

  res.status(200).send({ products: updatedWishlist });
});

router.post("/:id", async (req, res) => {
  const { id } = req.params;
  let currentProduct = req.currentProduct;
  currentProduct.wishlist = true;
  let currentWishlist = req.wishlist;
  let wishlistArray = currentWishlist.wishlist;

  if (wishlistArray.find((item) => item.productId === id)) {
    res.status(500).send({ status: "failure", product: {} });
  } else {
    wishlistArray.push({ productId: id });
  }
  currentWishlist.wishlist = wishlistArray;
  try {
    let response = await currentWishlist.save();
    res.status(200).send({ status: "success", product: currentProduct });
  } catch (error) {
    console.error("error ->", error);
    res.send(500).send({ status: "failure", product: {} });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  let currentProduct = req.currentProduct;
  let currentWishlist = req.wishlist;

  let wishlistArray = currentWishlist.wishlist;

  let x = wishlistArray.find((item) => String(item.productId) === id);

  if (wishlistArray.find((item) => String(item.productId) === id)) {
    wishlistArray = wishlistArray.filter(
      (item) => String(item.productId) !== id
    );
  } else {
    res.status(500).send({ status: "failure", product: {} });
  }

  currentWishlist.wishlist = wishlistArray;
  try {
    let response = await currentWishlist.save();

    res.status(200).send({ status: "success", product: currentProduct });
  } catch (error) {
    console.error("error ->", error);
    res.status(500).send({ status: "failure", product: {} });
  }
});

module.exports = router;
