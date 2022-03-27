import { getCustomRepository } from "typeorm";
import { FinancialEntriesRepositories } from "../repositories/FinancialEntriesRepositories";

class RemoveFinancialEntriesService {
  async execute(id: string) {
    const financialEntriesRepository = getCustomRepository(
      FinancialEntriesRepositories
    );
    const financialEntriesToRemove = await financialEntriesRepository.findOne(
      id
    );

    if (!financialEntriesToRemove) {
      throw new Error("Financial Entries not found");
    }

    await financialEntriesRepository.delete({ id: id });

    return financialEntriesToRemove;
  }
}

export { RemoveFinancialEntriesService };
