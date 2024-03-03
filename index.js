const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

const connectDB = require("./src/config/database");
const { PORT } = require("./src/config/dotenvConfig");
const apiRoutes = require("./src/routes/index");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api", apiRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
