var express = require("express");
var router = express.Router();
var popularProducts = require("../helpers/popularProducts");
const redisClient = require("../redis");
const e = require("express");

router.get("/", async function (req, res) {
  const result = [];
  for (const productURL of popularProducts()) {
    const productData = await redisClient.get(productURL);
    if (productData) {
      const responseObj = JSON.parse(productData);
      result.push(responseObj);
    }
  }
  res.json(result);
});

module.exports = router;
