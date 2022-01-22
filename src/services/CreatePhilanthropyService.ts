import { getCustomRepository } from "typeorm";
import { CalendarRepositories } from "../repositories/CalendarRepositories";

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
    type,
  }: IPhilanthropyRequest) {
    const calendarRepository = getCustomRepository(CalendarRepositories);

    if (!title || !description || !local || !date || !type) {
      throw new Error("Fill all fields");
    }

    /**
     * this code is for suport the type of the date in sqlite
     */
    const dateFormated = new Date(date);
    const dateText = dateFormated.toISOString();
    const dateTextFormated = dateText.substring(0, 23).replace("T", " ");

    const calendarAlreadyExists = await calendarRepository.findOne({
      title,
      date: dateTextFormated,
      extra: local,
      type,
    });

    if (calendarAlreadyExists) {
      throw new Error("Philanthropy already exists");
    }

    const philanthropy = calendarRepository.create({
      title,
      description,
      extra: local,
      date,
      type,
    });

    await calendarRepository.save(philanthropy);

    return philanthropy;
  }
}

export { CreatePhilanthropyService };
