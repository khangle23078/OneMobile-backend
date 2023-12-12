import { Router } from "express";
import {
  createProduct,
  deleteProductById,
  getProductById,
  getProducts,
  getProductsByCategory,
  searchProductByName,
  updateProductById,
} from "../controllers/product.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";

const router = Router();

router.get("/getAll", getProducts);
router.get("/getById/:id", getProductById);
router.get('/category/:id', getProductsByCategory)
router.get("/search", searchProductByName);
router.post("/create", requireAuth, createProduct);
router.put("/updateById/:id", requireAuth, updateProductById);
router.delete("/deleteById/:id", requireAuth, deleteProductById);

export default router;
