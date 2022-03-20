import { getCustomRepository } from 'typeorm';
import { FinancialEntriesRepositories } from '../repositories/FinancialEntriesRepositories';

interface IFinancialEntriesRequest {
  description: string;
  type: string;
  date: Date;
  value: number;
}

class CreateFinancialEntriesService {
  async execute({
    description, type, date, value,
  }: IFinancialEntriesRequest) {
    const financialEntriesRepository = getCustomRepository(
      FinancialEntriesRepositories,
    );

    if (!description || !type || !date || !value) {
      throw new Error('Fill all fields');
    }

    if (type != 'credit' && type != 'debit') {
      throw new Error('Type incorrect');
    }

    /**
     * this code is for support the type of the date in sqlite
     */
    const dateFormatted = new Date(date);
    const dateText = dateFormatted.toISOString();
    const dateTextFormatted = dateText.substring(0, 23).replace('T', ' ');

    const financialEntriesAlreadyExists = await financialEntriesRepository.findOne({
      description,
      date: dateTextFormatted,
      type,
      value,
    });

    if (financialEntriesAlreadyExists) {
      throw new Error('Financial Entries already exists');
    }

    const financialEntries = financialEntriesRepository.create({
      description,
      type,
      date,
      value,
    });

    await financialEntriesRepository.save(financialEntries);

    return financialEntries;
  }
}

export { CreateFinancialEntriesService };
