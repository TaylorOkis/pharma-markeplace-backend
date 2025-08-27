import { NextFunction, Request, Response } from "express";
import { UnAuthenticatedError } from "../errors/error/index.js";
import { auth } from "@/config/firebase.js";
import { verifyToken } from "../utils/jwt.util.js";
import { PayLoadRequest } from "../types/types.js";

const authenticateUser = async (
  req: PayLoadRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  const roleToken = req.signedCookies.roleToken;
  if (!authHeader || !authHeader.startsWith("Bearere ")) {
    throw new UnAuthenticatedError("Authorization Invalid");
  }

  const idToken = authHeader.split(" ")[1];

  try {
    const authPayLoad = await auth.verifyIdToken(idToken);
    const rolePayLoad = verifyToken(roleToken);
    req.user = {
      uid: authPayLoad.uid,
      email: authPayLoad.email!,
      role: rolePayLoad,
    };
    next();
  } catch (error) {
    throw new UnAuthenticatedError("Authorization Invalid");
  }
};

export { authenticateUser };
