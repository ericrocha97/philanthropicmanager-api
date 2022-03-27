import { getCustomRepository } from "typeorm";
import { CalendarRepositories } from "../repositories/CalendarRepositories";
import { MemberRepositories } from "../repositories/MemberRepositories";
import { GetCurrentAdministrationDate } from "../utils/GetCurrentAdminstrationDate";

interface IWorkRequest {
  id: string;
  title: string;
  description: string;
  member: string;
  date: string;
  type: string;
}

class UpdateWorkService {
  async execute({ id, title, description, member, date, type }: IWorkRequest) {
    const calendarRepository = getCustomRepository(CalendarRepositories);
    const memberRepository = getCustomRepository(MemberRepositories);
    const { dateInt, dateEnd } = await GetCurrentAdministrationDate();

    const workToUpdate = await calendarRepository.findOne(id);

    if (!workToUpdate) {
      throw new Error("Work not found");
    }

    if (date > dateEnd || date < dateInt) {
      throw new Error(
        "It is not possible to register works outside the administrative period."
      );
    }

    if (member) {
      const memberExists = await memberRepository.findOne({
        id: member
      });

      if (!memberExists) {
        throw new Error("Member not found");
      }

      if (!memberExists.active) {
        throw new Error("Member is not active");
      }
    }

    if (type != "work") {
      throw new Error("Work type incorrect");
    }

    await calendarRepository.update(id, {
      title: title || workToUpdate.title,
      description: description || workToUpdate.description,
      extra: member || workToUpdate.extra,
      date: date || workToUpdate.date
    });

    const work = await calendarRepository.findOne(id);

    return work;
  }
}

export { UpdateWorkService };
