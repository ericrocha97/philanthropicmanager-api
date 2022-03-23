import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;

  const userRepository = getCustomRepository(UserRepositories);

  const { admin } = await userRepository.findOne(user_id);

  if (!admin) {
    return response.status(403).json({
      status: "error",
      message: "Admin permission required"
    });
  }

  return next();
}
