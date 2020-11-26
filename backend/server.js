import express from "express";
import { data } from "./data.js";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";

const pwd = "g1dPr5MkQp7nVjzx";

const app = express();
const port = process.env.PORT || 5001;
mongoose.connect(
  "mongodb+srv://admin:g1dPr5MkQp7nVjzx@cluster0.zxbdw.mongodb.net/amazona?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => console.log("Connected to DB")
);

app.use("/api/users", userRouter);

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

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => console.log("Server running at port " + port));
