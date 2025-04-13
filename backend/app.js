const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(express.json());

var sentiment = require("./routes/sentiment");
app.use("/sentiment", sentiment);

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
