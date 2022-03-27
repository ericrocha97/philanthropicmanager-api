import { getRepository } from "typeorm";
import { Member } from "../entities/Member";

interface IMemberRequest {
  name: string;
  CID: string;
  address: string;
  CEP: string;
  phone: string;
  birthday: string;
  level: number;
}

class CreateMemberService {
  async execute({
    name,
    CID,
    address,
    CEP,
    phone,
    birthday,
    level
  }: IMemberRequest) {
    const memberRepository = getRepository(Member);

    if (!name || !CID || !address || !CEP || !phone || !birthday || !level) {
      throw new Error("Fill all fields");
    }
    const memberAlreadyExists = await memberRepository.findOne({
      CID
    });

    if (memberAlreadyExists) {
      throw new Error("Member already exists");
    }

    const member = memberRepository.create({
      name,
      CID,
      address,
      CEP,
      phone,
      birthday,
      level
    });

    await memberRepository.save(member);

    return member;
  }
}

export { CreateMemberService };
