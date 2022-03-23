import { Request, Response } from "express";
import { CreateFinancialEntriesService } from "../services/CreateFinancialEntriesService";

class CreateFinancialEntriesController {
  async handle(request: Request, response: Response) {
    const { description, type, date, value } = request.body;

    const createFinancialEntriesService = new CreateFinancialEntriesService();

    const philanthropy = await createFinancialEntriesService.execute({
      description,
      type,
      date,
      value
    });

    return response.json(philanthropy);
  }
}

export { CreateFinancialEntriesController };
