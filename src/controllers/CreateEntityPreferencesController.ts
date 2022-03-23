import { Request, Response } from "express";
import { CreateEntityPreferencesService } from "../services/CreateEntityPreferencesService";

class CreateEntityPreferencesController {
  async handle(request: Request, response: Response) {
    const {
      administration,
      leader1,
      leader2,
      leader3,
      treasurer,
      clerk,
      president_work,
      president_philanthropy,
      current
    } = request.body;

    const createEntityPreferencesService = new CreateEntityPreferencesService();

    const philanthropy = await createEntityPreferencesService.execute({
      administration,
      leader1,
      leader2,
      leader3,
      treasurer,
      clerk,
      president_work,
      president_philanthropy,
      current
    });

    return response.json(philanthropy);
  }
}

export { CreateEntityPreferencesController };
