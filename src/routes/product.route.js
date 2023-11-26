import { Router } from "express";
import {
  createProduct,
  deleteProductById,
  getProductById,
  getProducts,
  searchProductByName,
  updateProductById,
} from "../controllers/product.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";

const router = Router();

router.get("/getAll", requireAuth, getProducts);
router.get("/getById/:id", requireAuth, getProductById);
router.get("/search", requireAuth, searchProductByName);
router.post("/create", requireAuth, createProduct);
router.put("/updateById/:id", requireAuth, updateProductById);
router.delete("/deleteById/:id", requireAuth, deleteProductById);

export default router;
