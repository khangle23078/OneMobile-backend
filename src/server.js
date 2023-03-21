import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import { connectDb } from "./config/db.config.js";
import categoryRoute from "./routes/category.route.js";
import productRoute from "./routes/product.route.js";
import orderRoute from "./routes/order.route.js";
import authRoute from "./routes/auth.route.js";
import uploadRoute from './routes/upload.route.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;
connectDb();

app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/file", uploadRoute)

app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});
