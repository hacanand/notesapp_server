const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
const allowedOrigins = [
  " https://notesapp-client.vercel.app/",
  " https://notesapp-client.vercel.app",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

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
