import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import rateLimit from 'express-rate-limit';

const authLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 5,
    message: { error: 'Too many login attempts' }
});

const router = new Router();
//post
router.post('/user/reg', authLimiter, userController.reg);
router.post('/user/log', authLimiter, userController.log);
//patch
router.patch('/user/changeUserPassword', userController.patch);
//put
router.put('/user/changeUserInfo', userController.put);
//delete
router.delete('/user/del', userController.del);

export default router;