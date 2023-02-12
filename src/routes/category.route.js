import {Router} from "express";
import {
  createCategory,
  getCategories,
} from "../controllers/category.controller.js";

const router = Router();

router.get("/getAll", getCategories);
router.post("/create", createCategory);

export default router;
