import {Router} from "express";
import {
  createCategory,
  getCategories,
  getCategoryById,
} from "../controllers/category.controller.js";

const router = Router();

router.get("/getAll", getCategories);
router.get("/getById/:id", getCategoryById);
router.post("/create", createCategory);

export default router;
