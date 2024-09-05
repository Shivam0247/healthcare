const connectToMongo = require("./db");
// const Print = require('./routes/Print');

const express = require("express");
var cors = require("cors");

const app = express();
const port = 4000;

app.use(
  cors({
    origin: ["https://healthcarepdeu.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/", (req, res) => {
  res.json("Hello");
});

app.use("/api/auth", require("./routes/user"));

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

connectToMongo();

console.log("Server setup complete.");
