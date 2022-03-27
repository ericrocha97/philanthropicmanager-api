import { getCustomRepository } from "typeorm";
import { CalendarRepositories } from "../repositories/CalendarRepositories";

class RemovePhilanthropyService {
  async execute(id: string) {
    const calendarRepository = getCustomRepository(CalendarRepositories);
    const philanthropyToRemove = await calendarRepository.findOne(id);

    if (!philanthropyToRemove) {
      throw new Error("Philanthropy not found");
    }

    if (philanthropyToRemove.type !== "philanthropy") {
      throw new Error("Philanthropy type incorrect");
    }

    await calendarRepository.delete({ id: id });

    return philanthropyToRemove;
  }
}

export { RemovePhilanthropyService };
