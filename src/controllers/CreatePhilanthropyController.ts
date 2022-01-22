import { Request, Response } from "express";
import { CreatePhilanthropyService } from "../services/CreatePhilanthropyService";

class CreatePhilanthropyController {
  async handle(request: Request, response: Response) {
    const { title, description, local, date, type } = request.body;

    const createPhilanthropyService = new CreatePhilanthropyService();

    const philanthropy = await createPhilanthropyService.execute({
      title,
      description,
      local,
      date,
      type,
    });

    return response.json(philanthropy);
  }
}

export { CreatePhilanthropyController };
