import asyncWrapper from "@/core/utils/async.util.js";
import { AuthService } from "./auth.service.js";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

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
}
