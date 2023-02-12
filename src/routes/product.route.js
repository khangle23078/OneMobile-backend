import {Router} from "express";
import {
  createProduct,
  getProductById,
  getProducts,
  updateProductById,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/getAll", getProducts);
router.get("/getById/:id", getProductById);
router.post("/create", createProduct);
router.post("/updateById/:id", updateProductById);

export default router;
