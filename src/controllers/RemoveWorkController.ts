import { Request, Response } from "express";
import { RemoveWorkService } from "../services/RemoveWorkService.";

class RemoveWorkController {
  async handle(request: Request, response: Response) {
    const id = request.query.id as string;

    const removeWorkService = new RemoveWorkService();
    const work = await removeWorkService.execute(id);

    return response.json(work);
  }
}

export { RemoveWorkController };
