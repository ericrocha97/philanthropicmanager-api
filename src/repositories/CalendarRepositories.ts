import { EntityRepository, Repository } from "typeorm";
import { Calendar } from "../entities/Calendar";

@EntityRepository(Calendar)
class CalendarRepositories extends Repository<Calendar> {}

export { CalendarRepositories };
