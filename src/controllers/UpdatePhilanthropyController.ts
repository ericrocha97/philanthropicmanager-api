import { Request, Response } from "express";
import { UpdatePhilanthropyService } from "../services/UpdatePhilanthropyService";

class UpdatePhilanthropyController {
  async handle(request: Request, response: Response) {
    const id = request.query.id as string;
    const { title, description, local, date, type } = request.body;

    const updatePhilanthropyService = new UpdatePhilanthropyService();

    const philanthropy = await updatePhilanthropyService.execute({
      id,
      title,
      description,
      local,
      date,
      type
    });

    return response.json(philanthropy);
  }
}

export { UpdatePhilanthropyController };
