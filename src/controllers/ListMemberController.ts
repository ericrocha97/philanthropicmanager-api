import { Request, Response } from "express";
import { ListMemberService } from "../services/ListMemberService";

class ListMemberController {
  async handle(request: Request, response: Response) {
    const listMemberService = new ListMemberService();
    const members = await listMemberService.execute();
    return response.json(members);
  }
}

export { ListMemberController };
