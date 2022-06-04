import { getCustomRepository } from "typeorm";
import { CalendarRepositories } from "../repositories/CalendarRepositories";
import { GetCurrentAdministrationDate } from "../utils/GetCurrentAdministrationDate";

interface IPhilanthropyRequest {
  title: string;
  description: string;
  local: string;
  date: string;
  type: string;
}

class CreatePhilanthropyService {
  async execute({
    title,
    description,
    local,
    date,
    type
  }: IPhilanthropyRequest) {
    const calendarRepository = getCustomRepository(CalendarRepositories);
    const { dateInt, dateEnd } = await GetCurrentAdministrationDate();

    if (!title || !description || !local || !date || !type) {
      throw new Error("Fill all fields");
    }

    if (type != "philanthropy") {
      throw new Error("Philanthropy type incorrect");
    }

    if (date > dateEnd || date < dateInt) {
      throw new Error(
        "It is not possible to register philanthropies outside the administrative period."
      );
    }

    const calendarAlreadyExists = await calendarRepository.findOne({
      title,
      date,
      extra: local,
      type
    });

    if (calendarAlreadyExists) {
      throw new Error("Philanthropy already exists");
    }

    const philanthropy = calendarRepository.create({
      title,
      description,
      extra: local,
      date,
      type
    });

    await calendarRepository.save(philanthropy);

    return philanthropy;
  }
}

export { CreatePhilanthropyService };
