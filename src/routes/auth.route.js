import { Router } from "express";
import { createRefreshToken, login, register } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refreshToken", createRefreshToken);

export default router;
