import express from "express";
import cookieParser from "cookie-parser";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import producRoutes from "./routes/producRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleWare/errorHandiler.js";
dotenv.config();

const port = process.env.PORT || 5000;
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.use("/api/products", producRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

// app.get("/api/products", (req, res) => {
//   res.status(200).json(products);
// });
// app.get("/api/products/:id", (req, res) => {
//   console.log(req);
//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });

app.listen(port, () => console.log(`Server Running Port Is: ${port} `));
