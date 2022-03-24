import { Request, Response } from "express";
import { DisableMemberService } from "../services/DisableMemberService";

class DisableMemberController {
  async handle(request: Request, response: Response) {
    const id = request.query.id as string;
    const { active } = request.body;

    const disableMemberService = new DisableMemberService();
    const member = await disableMemberService.execute(id, active);
    return response.json(member);
  }
}

export { DisableMemberController };
