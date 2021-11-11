const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

const db = process.env.DATABASE;
mongoose.connect(db).then(() => console.log("DATABASE CONNECTION SUCCESSFUL"));

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

const productRouter = require("./routes/productRoutes");

app.use(express.json());
app.use(logging);

app.use("/api/v1/products", productRouter);

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
