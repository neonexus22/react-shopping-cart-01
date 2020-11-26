import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";

const app = express();
const port = process.env.PORT || 5001;
mongoose.connect(
  process.env.MONGODB_URL ||
    "mongodb+srv://admin:g1dPr5MkQp7nVjzx@cluster0.zxbdw.mongodb.net/amazona?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => console.log("Connected to DB")
);

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.status(200).send("Server is Ready now");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => console.log("Server running at port " + port));
