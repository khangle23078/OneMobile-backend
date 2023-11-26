import { Router } from "express";
import {
  createCategory,
  deleteCategoryById,
  getCategories,
  getCategoryById,
  updateCategoryById,
} from "../controllers/category.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";

const router = Router();

router.get("/getAll", requireAuth, getCategories);
router.get("/getById/:id", requireAuth, getCategoryById);
router.post("/create", requireAuth, createCategory);
router.put("/updateById/:id", requireAuth, updateCategoryById);
router.delete("/deleteById/:id", requireAuth, deleteCategoryById);

export default router;
