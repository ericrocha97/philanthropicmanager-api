import { Request, Response, NextFunction } from "express";

export function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const admin = true;

  if (!admin) {
    return response.status(403).json({
      status: "error",
      message: "Admin permission required",
    });
  }

  return next();
}
