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

router.get("/getAll", requireAuth, getProducts);
router.get("/getById/:id", requireAuth, getProductById);
router.post("/create", requireAuth, createProduct);
router.post("/updateById/:id", requireAuth, updateProductById);
router.post("/deleteById/:id", requireAuth, deleteProductById);

export default router;
