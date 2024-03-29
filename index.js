const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PATCH"],
    credentials: true,
    
  })
)
const connectDB = require("./src/config/database");
const { PORT } = require("./src/config/dotenvConfig");
const apiRoutes = require("./src/routes/index");
 
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
