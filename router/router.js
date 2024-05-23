const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const page = "Home";
  res.render("index", { page });
});

module.exports = router;
