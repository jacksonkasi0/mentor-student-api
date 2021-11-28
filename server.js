const express = require("express");
const connectDB = require("./config/db");
const app = express();
const apiRouter = require("./routes");
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use("/", apiRouter);

app.listen(PORT, () => {
  console.log("Server is Up and Running...");
});
