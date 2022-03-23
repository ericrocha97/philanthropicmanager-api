import { getCustomRepository } from "typeorm";
import { CalendarRepositories } from "../repositories/CalendarRepositories";
import { GetCurrentAdministrationDate } from "../utils/GetCurrentAdminstrationDate";

interface IPhilanthropyRequest {
  title: string;
  description: string;
  local: string;
  date: Date;
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

    /**
     * this code is for support the type of the date in sqlite
     */
    const dateFormatted = new Date(date);
    const dateText = dateFormatted.toISOString();
    const [dateTextFormatted] = dateText
      .substring(0, 23)
      .replace("T", " ")
      .split(" ");

    if (dateTextFormatted > dateEnd || dateTextFormatted < dateInt) {
      throw new Error(
        "It is not possible to register philanthropies outside the administrative period."
      );
    }

    const calendarAlreadyExists = await calendarRepository.findOne({
      title,
      date: dateTextFormatted,
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
