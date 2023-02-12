import {Router} from "express";
import {
  createProduct,
  getProductById,
  getProducts,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/getAll", getProducts);
router.get("/getById/:id", getProductById);
router.post("/create", createProduct);

export default router;
