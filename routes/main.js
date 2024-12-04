const express = require("express");
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs";
const asyncHandler = require("express-async-handler");


router.get(
  ["/", "/home"],
  asyncHandler(async (req, res) => {
    const locals = {
      title: "Home",
    };
    const date = await Post.find({});
    res.render("index", { locals, date, layout: mainLayout });
  })
);

module.exports = router;
