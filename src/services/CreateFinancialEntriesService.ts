import { getCustomRepository } from "typeorm";
import { FinancialEntriesRepositories } from "../repositories/FinancialEntriesRepositories";
import { GetCurrentAdministrationDate } from "../utils/GetCurrentAdministrationDate";

interface IFinancialEntriesRequest {
  description: string;
  type: string;
  date: string;
  value: number;
}

class CreateFinancialEntriesService {
  async execute({ description, type, date, value }: IFinancialEntriesRequest) {
    const financialEntriesRepository = getCustomRepository(
      FinancialEntriesRepositories
    );
    const { dateInt, dateEnd } = await GetCurrentAdministrationDate();

    if (!description || !type || !date || !value) {
      throw new Error("Fill all fields");
    }

    if (type != "credit" && type != "debit") {
      throw new Error("Type incorrect");
    }

    if (date > dateEnd || date < dateInt) {
      throw new Error(
        "It is not possible to register financial entries outside the administrative period."
      );
    }

    const financialEntriesAlreadyExists =
      await financialEntriesRepository.findOne({
        description,
        date,
        type,
        value
      });

    if (financialEntriesAlreadyExists) {
      throw new Error("Financial Entries already exists");
    }

    const financialEntries = financialEntriesRepository.create({
      description,
      type,
      date,
      value
    });

    await financialEntriesRepository.save(financialEntries);

    return financialEntries;
  }
}

export { CreateFinancialEntriesService };
