import { Router } from "express";
import { createOrder, getOrders } from "../controllers/order.controller.js";

const router = Router();

router.get("/getAll", getOrders);
router.post("/create", createOrder);

export default router;
