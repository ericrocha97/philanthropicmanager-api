import { Request, Response } from "express";
import { CreateWorkService } from "../services/CreateWorkService";

class CreateWorkController {
  async handle(request: Request, response: Response) {
    const { title, description, member, date, type } = request.body;

    const createWorkService = new CreateWorkService();

    const work = await createWorkService.execute({
      title,
      description,
      member,
      date,
      type
    });

    return response.json(work);
  }
}

export { CreateWorkController };
