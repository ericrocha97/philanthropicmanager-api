import { Request, Response } from "express";
import { UpdateFinancialEntriesService } from "../services/UpdateFinancialEntriesService";

class UpdateFinancialEntriesController {
  async handle(request: Request, response: Response) {
    const id = request.query.id as string;

    const { date, description, type, value } = request.body;

    const updateFinancialEntriesService = new UpdateFinancialEntriesService();

    const financialEntries = await updateFinancialEntriesService.execute({
      id,
      date,
      description,
      type,
      value
    });

    return response.json(financialEntries);
  }
}

export { UpdateFinancialEntriesController };
