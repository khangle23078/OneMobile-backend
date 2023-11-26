import { Router } from "express";
import { deleteImage, uploadImage } from "../controllers/upload.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { upload } from './../config/cloudinary.config.js'
const router = Router()

router.post('/upload', requireAuth, upload.single('image'), uploadImage)
router.delete('/destroy', requireAuth, deleteImage)

export default router;