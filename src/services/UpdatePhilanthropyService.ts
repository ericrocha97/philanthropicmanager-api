import { getCustomRepository } from "typeorm";
import { CalendarRepositories } from "../repositories/CalendarRepositories";
import { GetCurrentAdministrationDate } from "../utils/GetCurrentAdminstrationDate";

interface IPhilanthropyRequest {
  id: string;
  title: string;
  description: string;
  local: string;
  date: string;
}

class UpdatePhilanthropyService {
  async execute({ id, date, description, local, title }: IPhilanthropyRequest) {
    const calendarRepository = getCustomRepository(CalendarRepositories);
    const { dateInt, dateEnd } = await GetCurrentAdministrationDate();

    const philanthropyToUpdate = await calendarRepository.findOne(id);

    if (!philanthropyToUpdate) {
      throw new Error("Philanthropy not found");
    }

    if (date > dateEnd || date < dateInt) {
      throw new Error(
        "It is not possible to register philanthropies outside the administrative period."
      );
    }

    await calendarRepository.update(id, {
      title: title || philanthropyToUpdate.title,
      description: description || philanthropyToUpdate.description,
      extra: local || philanthropyToUpdate.extra,
      date: date || philanthropyToUpdate.date,
      updated_at: new Date()
    });

    const philanthropy = await calendarRepository.findOne(id);

    return philanthropy;
  }
}

export { UpdatePhilanthropyService };
