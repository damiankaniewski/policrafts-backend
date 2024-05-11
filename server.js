const express = require("express");
require("./config/db");
const productsRouter = require("./routes/products");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/products", productsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
