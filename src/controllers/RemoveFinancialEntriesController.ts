import { Request, Response } from "express";
import { RemoveFinancialEntriesService } from "../services/RemoveFinancialEntriesService";

class RemoveFinancialEntriesController {
  async handle(request: Request, response: Response) {
    const id = request.query.id as string;

    const removeFinancialEntriesService = new RemoveFinancialEntriesService();
    const financialEntries = await removeFinancialEntriesService.execute(id);

    return response.json(financialEntries);
  }
}

export { RemoveFinancialEntriesController };
