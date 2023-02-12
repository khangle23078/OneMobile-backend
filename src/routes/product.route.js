import {Router} from "express";
import {createProduct, getProducts} from "../controllers/product.controller.js";

const router = Router();

router.get("/getAll", getProducts);
router.post("/create", createProduct);

export default router;
