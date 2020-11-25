import express from "express";
import { data } from "./data.js";

const app = express();
const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.status(200).send("Server is Ready now");
});

app.get("/api/products", (req, res) => {
  res.status(200).send(data.products);
});

app.listen(port, () => console.log("Server running at port " + port));
