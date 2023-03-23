import { Router } from "express";
import { createOrder, getOrders, updateOrder } from "../controllers/order.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";

const router = Router();

router.get("/getAll", requireAuth, getOrders);
router.post("/create", requireAuth, createOrder);
router.post("/updateById/:id", requireAuth, updateOrder);

export default router;
