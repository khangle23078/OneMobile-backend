import { Router } from "express";
import { createBanner, deleteBannerById, getBanners, updateBannerById } from "../controllers/banner.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";
const route = Router()

route.get("/getAll", requireAuth, getBanners)
route.post("/create", requireAuth, createBanner)
route.post("/updateById/:id", requireAuth, updateBannerById)
route.post("/deleteById/:id", requireAuth, deleteBannerById)

export default route;