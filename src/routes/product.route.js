import { Router } from "express";
import {
  createProduct,
  deleteProductById,
  getProductById,
  getProducts,
  updateProductById,
} from "../controllers/product.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";

const router = Router();

router.get("/getAll", getProducts);
router.get("/getById/:id", getProductById);
router.post("/create", createProduct);
router.post("/updateById/:id", updateProductById);
router.post("/deleteById/:id", deleteProductById);

export default router;
