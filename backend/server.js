const express = require("express");
const connectDB = require("./config/db");
const itemRouter = require("./routes/itemRoutes");
const eventRouter = require("./routes/eventRouter");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors");
require("dotenv").config();

app.use(cors());

// connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", itemRouter);
app.use("/", eventRouter);

app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
  connectDB();
});
