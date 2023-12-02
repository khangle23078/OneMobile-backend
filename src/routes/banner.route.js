import { Router } from "express";
import { createBanner, deleteBannerById, getBanners, updateBannerById } from "../controllers/banner.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";
const route = Router()

route.get("/getAll", requireAuth, getBanners)
route.get('/getById/:id', requireAuth, getBanner)
route.post("/create", requireAuth, createBanner)
route.put("/updateById/:id", requireAuth, updateBannerById)
route.delete("/deleteById/:id", requireAuth, deleteBannerById)

export default route;