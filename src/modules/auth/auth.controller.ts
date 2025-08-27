import asyncWrapper from "@/core/utils/async.util.js";
import { AuthService } from "./auth.service.js";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { attachRoleCookieToResponse } from "@/core/utils/cookies.util.js";

export class AuthController {
  private authService = new AuthService();

  register = asyncWrapper(async (req: Request, res: Response) => {
    const newUser = await this.authService.registerUser(req.body);

    res.status(StatusCodes.CREATED).json({
      status: "success",
      message: "User Created Successfully",
      data: newUser,
    });
  });

  login = asyncWrapper(async (req: Request, res: Response) => {
    attachRoleCookieToResponse({ res, role: { role: req.body.role } });
    res.status(StatusCodes.CREATED).json({
      status: "success",
      message: "User login successfully",
    });
  });

  logOut = asyncWrapper(async (req: Request, res: Response) => {
    res.clearCookie("roleToken");
    res
      .status(StatusCodes.OK)
      .json({ status: "success", message: "Logged out successfully" });
  });
}
