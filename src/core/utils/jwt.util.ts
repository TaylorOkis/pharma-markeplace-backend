import { JWTErrorMessage } from "../constants/constants.js";
import jwt, { JwtPayload } from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

const generateToken = ({ payLoad }: { payLoad: any }) => {
  if (!process.env.JWT_SECRET) {
    throw new Error(JWTErrorMessage);
  }
  if (!process.env.JWT_LIFETIME) {
    throw new Error(JWTErrorMessage);
  }

  const token = jwt.sign(payLoad!, process.env.JWT_SECRET as string, {
    expiresIn: (process.env.JWT_LIFETIME as any) ?? "id",
  });

  return token;
};

const verifyToken = (token: string) => {
  if (!process.env.JWT_SECRET) {
    throw new Error(JWTErrorMessage);
  }
  return jwt.verify(token, process.env.JWT_SECRET);
};

export { generateToken, verifyToken };
