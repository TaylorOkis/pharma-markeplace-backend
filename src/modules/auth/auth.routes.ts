import { Router } from "express";
import { AuthController } from "./auth.controller.js";
import {
  authenticateLogin,
  authenticateUser,
} from "@/core/middlewares/auth.middleware.js";

const router = Router();
const authController = new AuthController();

router.post("/register", authController.register);
router.post("/login", authenticateLogin, authController.login);
router.get("/logout", authenticateUser, authController.logOut);

export default router;
