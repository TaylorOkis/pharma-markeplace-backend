import { Response } from "express";

import { generateToken } from "./jwt.util.js";

export function attachRoleCookieToResponse({
  res,
  role,
}: {
  res: Response;
  role: string;
}) {
  const roleToken = generateToken({ payLoad: role });
  const threeDays = 1000 * 60 * 60 * 72;

  res.cookie("roleToken", roleToken, {
    httpOnly: true,
    secure: true,
    expires: new Date(Date.now() + threeDays),
    signed: true,
    sameSite: "none",
  });
}
