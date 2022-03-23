import { Request, Response } from "express";
import { CreateMemberService } from "../services/CreateMemberService";

class CreateMemberController {
  async handle(request: Request, response: Response) {
    const { name, CID, address, CEP, phone, birthday, level } = request.body;

    const createMemberService = new CreateMemberService();

    const member = await createMemberService.execute({
      name,
      CID,
      address,
      CEP,
      phone,
      birthday,
      level
    });

    return response.json(member);
  }
}

export { CreateMemberController };
