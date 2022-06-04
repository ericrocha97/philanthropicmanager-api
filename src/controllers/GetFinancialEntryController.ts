import { Request, Response } from "express";
import { GetFinancialEntryService } from "../services/GetFinancialEntryService";

class GetFinancialEntryController {
  async handle(request: Request, response: Response) {
    const id = request.params.id as string;

    const getFinancialEntryService = new GetFinancialEntryService();

    const financialEntry = await getFinancialEntryService.execute({ id });

    return response.json(financialEntry);
  }
}

export { GetFinancialEntryController };
