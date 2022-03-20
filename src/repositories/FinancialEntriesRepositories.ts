import { EntityRepository, Repository } from "typeorm";
import { FinancialEntries } from "../entities/FinancialEntries";

@EntityRepository(FinancialEntries)
class FinancialEntriesRepositories extends Repository<FinancialEntries> { }

export { FinancialEntriesRepositories };
