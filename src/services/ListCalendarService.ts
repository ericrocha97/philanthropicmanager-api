import { getCustomRepository, Between } from "typeorm";
import { CalendarRepositories } from "../repositories/CalendarRepositories";
import { GetCurrentAdministrationDate } from "../utils/GetCurrentAdminstrationDate";

class ListCalendarService {
  async execute() {
    const calendarRepository = getCustomRepository(CalendarRepositories);
    const { dateInt, dateEnd } = await GetCurrentAdministrationDate();
    const calendar = await calendarRepository.find({
      where: {
        date: Between(dateInt, dateEnd)
      },
      order: {
        date: "ASC"
      }
    });
    return calendar;
  }
}

export { ListCalendarService };
