import { Between, getCustomRepository } from "typeorm";
import { FinancialEntriesRepositories } from "../repositories/FinancialEntriesRepositories";
import { GetCurrentAdministrationDate } from "../utils/GetCurrentAdminstrationDate";

class ListFinancialEntriesService {
  async execute() {
    const financialEntryRepository = getCustomRepository(
      FinancialEntriesRepositories
    );
    const { dateInt, dateEnd } = await GetCurrentAdministrationDate();
    const financialEntries = await financialEntryRepository.find({
      where: {
        date: Between(dateInt, dateEnd)
      },
      order: { date: "ASC" }
    });
    return financialEntries;
  }
}

export { ListFinancialEntriesService };
