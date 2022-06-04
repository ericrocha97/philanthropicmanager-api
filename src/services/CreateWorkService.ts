import { getCustomRepository, getRepository } from "typeorm";
import { Member } from "../entities/Member";
import { CalendarRepositories } from "../repositories/CalendarRepositories";
import { GetCurrentAdministrationDate } from "../utils/GetCurrentAdministrationDate";

interface IWorkRequest {
  title: string;
  description: string;
  member: string;
  date: string;
  type: string;
}

class CreateWorkService {
  async execute({ title, description, member, date, type }: IWorkRequest) {
    const calendarRepository = getCustomRepository(CalendarRepositories);
    const memberRepository = getRepository(Member);
    const { dateInt, dateEnd } = await GetCurrentAdministrationDate();

    if (!title || !description || !member || !date || !type) {
      throw new Error("Fill all fields");
    }

    const memberExists = await memberRepository.findOne({
      id: member
    });

    if (!memberExists) {
      throw new Error("Member not found");
    }

    if (!memberExists.active) {
      throw new Error("Member is not active");
    }

    if (type != "work") {
      throw new Error("Work type incorrect");
    }

    if (date > dateEnd || date < dateInt) {
      throw new Error(
        "It is not possible to register works outside the administrative period."
      );
    }

    const calendarAlreadyExists = await calendarRepository.findOne({
      title,
      date,
      extra: member,
      type
    });

    if (calendarAlreadyExists) {
      throw new Error("Work already exists");
    }

    const work = calendarRepository.create({
      title,
      description,
      extra: member,
      date,
      type
    });

    await calendarRepository.save(work);

    return work;
  }
}

export { CreateWorkService };
