import { getCustomRepository } from "typeorm";
import { CalendarRepositories } from "../repositories/CalendarRepositories";

class RemovePhilanthropyService {
  async execute(id: string) {
    const calendarRepository = getCustomRepository(CalendarRepositories);
    const philanthropyToRemove = await calendarRepository.findOne(id);

    if (!philanthropyToRemove) {
      throw new Error("Philanthropy not found");
    }

    await calendarRepository.delete({ id: id });

    return philanthropyToRemove;
  }
}

export { RemovePhilanthropyService };
