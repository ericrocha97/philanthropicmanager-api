import { getCustomRepository } from "typeorm";
import { FinancialEntriesRepositories } from "../repositories/FinancialEntriesRepositories";

interface IGetFinancialRequest {
  id: string;
}

class GetFinancialEntryService {
  async execute({ id }: IGetFinancialRequest) {
    const financialEntryRepository = getCustomRepository(
      FinancialEntriesRepositories
    );
    const financialEntry = await financialEntryRepository.find({
      where: {
        id
      }
    });
    return financialEntry;
  }
}

export { GetFinancialEntryService };
