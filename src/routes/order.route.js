import { Router } from "express";
import { createOrder, getOrders, updateOrder } from "../controllers/order.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";

const router = Router();

router.get("/getAll", getOrders);
router.post("/create", requireAuth, createOrder);
router.put("/updateById/:id", requireAuth, updateOrder);

export default router;
