const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
app.use(
  cors({
    origin: "https://notesapp-client.vercel.app",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
const connectDB = require("./src/config/database");
const { PORT } = require("./src/config/dotenvConfig");
const apiRoutes = require("./src/routes/index");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
