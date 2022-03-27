import { Request, Response } from "express";
import { UpdateWorkService } from "../services/UpdateWorkService";

class UpdateWorkController {
  async handle(request: Request, response: Response) {
    const id = request.query.id as string;
    const { title, description, member, date, type } = request.body;

    const updateWorkService = new UpdateWorkService();

    const work = await updateWorkService.execute({
      id,
      title,
      description,
      member,
      date,
      type
    });

    return response.json(work);
  }
}

export { UpdateWorkController };
