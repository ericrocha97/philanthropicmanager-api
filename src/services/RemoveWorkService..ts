import { getCustomRepository } from "typeorm";
import { CalendarRepositories } from "../repositories/CalendarRepositories";

class RemoveWorkService {
  async execute(id: string) {
    const calendarRepository = getCustomRepository(CalendarRepositories);
    const workToRemove = await calendarRepository.findOne(id);

    if (!workToRemove) {
      throw new Error("Work not found");
    }

    if (workToRemove.type !== "work") {
      throw new Error("Work type incorrect");
    }

    await calendarRepository.delete({ id: id });

    return workToRemove;
  }
}

export { RemoveWorkService };
