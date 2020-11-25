import express from "express";
import { data } from "./data.js";

const app = express();
const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.status(200).send("Server is Ready now");
});

app.get("/api/products/:id", (req, res) => {
  const id = +req.params.id;
  const product = data.products.find((x) => x._id === id);
  if (product) {
    res.status(200).send(product);
  } else {
    res.status(404).send({ message: "Product not Found" });
  }
});

app.get("/api/products", (req, res) => {
  res.status(200).send(data.products);
});

app.listen(port, () => console.log("Server running at port " + port));
