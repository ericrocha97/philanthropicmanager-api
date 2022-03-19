import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { username, password, CID, admin } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      username,
      password,
      CID,
      admin,
    });

    const responseObject = {
      id: user.id,
      username: user.username,
      memberId: user.memberId,
      admin: user.admin,
    };

    return response.json(responseObject);
  }
}

export { CreateUserController };
