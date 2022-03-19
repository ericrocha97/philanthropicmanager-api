import { getCustomRepository, getRepository } from "typeorm";
import { Member } from "../entities/Member";
import { CalendarRepositories } from "../repositories/CalendarRepositories";

interface IWorkRequest {
  title: string;
  description: string;
  member: string;
  date: Date;
  type: string;
}

class CreateWorkService {
  async execute({
    title,
    description,
    member,
    date,
    type,
  }: IWorkRequest) {
    const calendarRepository = getCustomRepository(CalendarRepositories);
    const memberRepository = getRepository(Member);


    if (!title || !description || !member || !date || !type) {
      throw new Error("Fill all fields");
    }

    const memberExists = await memberRepository.findOne({
      id: member,
    });


    if (!memberExists) {
      throw new Error("Member not found");
    } 

    if(type != "work"){
      throw new Error("Work type incorrect");
    }

    /**
     * this code is for support the type of the date in sqlite
     */
    const dateFormatted = new Date(date);
    const dateText = dateFormatted.toISOString();
    const dateTextFormatted = dateText.substring(0, 23).replace("T", " ");

    const calendarAlreadyExists = await calendarRepository.findOne({
      title,
      date: dateTextFormatted,
      extra: member,
      type,
    });

    if (calendarAlreadyExists) {
      throw new Error("Work already exists");
    }

    const work = calendarRepository.create({
      title,
      description,
      extra: member,
      date,
      type,
    });

    await calendarRepository.save(work);

    return work;
  }
}

export { CreateWorkService };
