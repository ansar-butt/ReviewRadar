var express = require("express");
var router = express.Router();
var analyzeSentiment = require("../helpers/analysis");
var chatBotAnalysis = require("../helpers/chatBotAnalysis");
var fetchReviews = require("../helpers/fetchReviews");
const redisClient = require("../redis");

router.post("/", async function (req, res) {
  const productURL =
    req.body.productURL ||
    "https://www.amazon.de/-/en/Necklace-stainless-necklace-Stainless-Gemstone/dp/B0C348SRDV?pd_rd_w=C7Nhi&content-id=amzn1.sym.84725dcd-5e7f-4faa-928e-e35ccea16fec&pf_rd_p=84725dcd-5e7f-4faa-928e-e35ccea16fec&pf_rd_r=189HFPAA06ABVW6AXDZT&pd_rd_wg=j7pCc&pd_rd_r=303ed568-1e46-40ee-bf4b-a734b33423c7&pd_rd_i=B0C348SRDV&ref_=l1m-premium_B0C348SRDV&th=1";

  if (!productURL) {
    return res.status(400).json({ error: "Product URL is required" });
  }

  const productData = await redisClient.get(productURL);
  if (productData) {
    const responseObj = JSON.parse(productData);
    return res.json(responseObj);
  } else {
    const { reviews, imagePath } = fetchReviews(productURL);
    try {
      const sentiment = analyzeSentiment(reviews);
      const result = await chatBotAnalysis([
        `Write a ${sentiment} recommendation in English, using the following reviews as context while making sure to remove private details:`,
        ...reviews,
      ]);

      const responseObj = {
        review: result,
        image: imagePath,
        sentiment: sentiment,
      };
      await redisClient.set(productURL, JSON.stringify(responseObj));
      res.json(responseObj);
    } catch (error) {
      console.error("Error analyzing sentiment:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

module.exports = router;
