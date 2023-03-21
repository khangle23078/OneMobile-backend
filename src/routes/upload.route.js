import { Router } from "express";
import { deleteImage, uploadImage } from "../controllers/upload.controller.js";
import { upload } from './../config/cloudinary.config.js'
const router = Router()

router.post('/upload', upload.single('image'), uploadImage)
router.post('/destroy', deleteImage)

export default router;