const express = require("express");
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs";
const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");

router.get("/",(req, res) => {
  res.render("index",{layout:mainLayout});})

module.exports = router;
