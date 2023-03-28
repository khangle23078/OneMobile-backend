import { Router } from "express";
import { getBanners } from "../controllers/banner.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";

const route = Router()

route.get("/getAll", requireAuth, getBanners)

export default route;