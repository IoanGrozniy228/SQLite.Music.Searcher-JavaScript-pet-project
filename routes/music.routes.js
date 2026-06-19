import { Router } from "express";
import { getSong } from "../controllers/music.controller.js";

const router = new Router();
router.get('/music/:id', getSong);
export default router;