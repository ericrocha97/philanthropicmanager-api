import { Request, Response } from "express";
import { RemovePhilanthropyService } from "../services/RemovePhilanthropyService";

class RemovePhilanthropyController {
  async handle(request: Request, response: Response) {
    const id = request.query.id as string;

    const removePhilanthropyService = new RemovePhilanthropyService();
    const philanthropy = await removePhilanthropyService.execute(id);

    return response.json(philanthropy);
  }
}

export { RemovePhilanthropyController };
