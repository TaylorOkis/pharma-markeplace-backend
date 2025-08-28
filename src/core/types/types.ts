import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

interface PayLoadRequest extends Request {
  user?: {
    uid: string;
    email: string;
    role: JwtPayload | string;
  };
}

export { PayLoadRequest };
