import { Router } from "express";
import { createBanner, getBanners, updateBannerById } from "../controllers/banner.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";
const route = Router()

route.get("/getAll", requireAuth, getBanners)
route.post("/create", requireAuth, createBanner)
route.post("/updateById/:id", requireAuth, updateBannerById)

export default route;