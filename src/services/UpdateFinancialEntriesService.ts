import { getCustomRepository } from "typeorm";
import { FinancialEntriesRepositories } from "../repositories/FinancialEntriesRepositories";
import { GetCurrentAdministrationDate } from "../utils/GetCurrentAdministrationDate";

interface IFinancialEntriesRequest {
  id: string;
  description: string;
  type: string;
  date: string;
  value: number;
}

class UpdateFinancialEntriesService {
  async execute({
    id,
    date,
    description,
    type,
    value
  }: IFinancialEntriesRequest) {
    const financialEntriesRepository = getCustomRepository(
      FinancialEntriesRepositories
    );
    const { dateInt, dateEnd } = await GetCurrentAdministrationDate();

    const financialEntriesToUpdate = await financialEntriesRepository.findOne(
      id
    );

    if (!financialEntriesToUpdate) {
      throw new Error("Financial Entries not found");
    }

    if (date > dateEnd || date < dateInt) {
      throw new Error(
        "It is not possible to register philanthropies outside the administrative period."
      );
    }

    await financialEntriesRepository.update(id, {
      description: description || financialEntriesToUpdate.description,
      type: type || financialEntriesToUpdate.type,
      date: date || financialEntriesToUpdate.date,
      value: value || financialEntriesToUpdate.value
    });

    const financialEntries = await financialEntriesRepository.findOne(id);

    return financialEntries;
  }
}

export { UpdateFinancialEntriesService };
