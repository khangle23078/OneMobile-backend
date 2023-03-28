import { Router } from "express";
import { createBanner, getBanners } from "../controllers/banner.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";
const route = Router()

route.get("/getAll", requireAuth, getBanners)
route.post("/create", requireAuth, createBanner)

export default route;