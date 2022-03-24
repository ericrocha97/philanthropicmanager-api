import { Request, Response } from "express";
import { UpdateMemberService } from "../services/UpdateMemberService";

class UpdateMemberController {
  async handle(request: Request, response: Response) {
    const id = request.query.id as string;
    const { name, CID, address, CEP, phone, birthday, level } = request.body;

    const updateMemberService = new UpdateMemberService();
    const member = await updateMemberService.execute({
      id,
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

export { UpdateMemberController };
