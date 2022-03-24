import { Request, Response } from "express";
import { ListFinancialEntriesService } from "../services/ListFinancialEntriesService";

class ListFinancialEntriesController {
  async handle(request: Request, response: Response) {
    const listFinancialEntriesService = new ListFinancialEntriesService();
    const financialEntries = await listFinancialEntriesService.execute();
    return response.json(financialEntries);
  }
}

export { ListFinancialEntriesController };
